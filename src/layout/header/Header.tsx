/* eslint-disable tailwindcss/no-arbitrary-value */
'use client';
import React, { type FC, Fragment, useMemo, useState } from 'react';
import {
  ModalForBoxes,
  NotificationIndicator,
  Popup,
  ToggleCheckbox,
} from '@resido-fhm/ui-kit';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { LogoIcon } from '@/assets/icons/LogoIcon';
import { NavMenuIcon } from '@/assets/icons/NavMenuIcon';
import { NoAvatarIcon } from '@/assets/icons/NoAvatarIcon';
import { NotificationIcon } from '@/assets/icons/NotificationIcon';
import { cn } from '@/helper';
import {
  getNavItems,
  getProfileMenuItems,
  languages,
} from '@/layout/header/constants';
import styles from '@/layout/header/page.module.scss';

export const Header: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  const navItems = useMemo(() => getNavItems(t), [t]);
  const profileMenuItems = useMemo(
    () => getProfileMenuItems(t, session.status),
    [t, session.status],
  );

  const changeLanguage = (lang: string) => {
    const currentLanguage = Cookies.get('NEXT_LOCALE');
    if (currentLanguage === lang) return;
    Cookies.set('NEXT_LOCALE', lang, { expires: 7 });
    window.location.reload();
  };

  const getSelectedValue = (value: string) => {
    switch (value) {
      case t('Language and translation'):
        setShowModal(true);
        break;
      case t('Log in'):
        signIn('zitadel');
        break;
      case t('Log out'):
        signOut();
        break;
      case t('editProfile'):
        router.push('/editProfile');
      case t('Widgets'):
        router.push('/widgets');
        break;
    }
  };

  return (
    <>
      <div className="hidden grid-cols-3 border-b border-gray-200 px-5 py-3 md:grid md:px-10">
        <div className="flex items-center">
          <LogoIcon />
          <div className="ml-2.5 mt-3 text-base font-black leading-normal text-blue-300 md:text-xl">
            Vermieterbereich
          </div>
        </div>
        <div className="flex items-center gap-4 lg:justify-center">
          {navItems.map((item, index) =>
            item.subItems ? (
              <React.Fragment key={index}>
                <button
                  className={cn(
                    'relative hidden max-h-4.5 cursor-pointer bg-transparent md:flex',
                    styles.popoverButton,
                  )}
                  popoverTarget={item.subItems ? `${index}-header-popover` : ''}
                >
                  <span>{item.title}</span>
                  {item?.icon ? (
                    <div className="-translate-y-0.5">
                      <item.icon />
                    </div>
                  ) : null}
                </button>

                <div
                  popover="auto"
                  id={`${index}-header-popover`}
                  className={cn(
                    'absolute z-100 mt-8.5 min-w-60 cursor-default flex-col rounded-xl bg-white py-5 shadow-dropdown',
                    styles.dropdown,
                  )}
                >
                  {item.subItems.map((subitemGroup, i) => (
                    <Fragment key={i}>
                      {subitemGroup.map((subitem, index) => (
                        <p
                          key={index}
                          className="cursor-pointer px-4 py-3 text-sm font-medium hover:bg-gray-f7"
                        >
                          {subitem.label}
                        </p>
                      ))}
                      <div className="my-2 h-0.25 bg-gray-d last:hidden" />
                    </Fragment>
                  ))}
                </div>
              </React.Fragment>
            ) : (
              <Link
                role="none"
                href={item.link}
                key={item.id}
                className={cn(
                  'before:scale-1 relative hidden cursor-pointer font-medium text-gray-600 before:absolute before:left-1/2 before:top-6 before:-ml-2 before:hidden before:h-0.5 before:w-4.5 before:rounded-1 before:bg-blue-500 md:block',
                  {
                    'text-blue-500 before:block':
                      pathname === item.link ||
                      (!item.exact && pathname.includes(item.link || ' ')),
                  },
                )}
              >
                <button
                  className={cn(
                    'relative flex max-h-4.5 cursor-pointer bg-transparent',
                    styles.popoverButton,
                  )}
                  popoverTarget={item.subItems ? `${index}-header-popover` : ''}
                >
                  <span>{item.title}</span>
                </button>
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center justify-end">
          <Popup
            placement="bottom-end"
            body="Notifications"
            id="Notifications"
            icon={<NotificationIndicator />}
            description="No notifications yet"
            additionalText="You've got a blank slate (for now). We'll let you know when updates arrive!"
          >
            <div className="mr-3 flex items-center justify-center rounded-full md:mr-4">
              <NotificationIcon />
            </div>
          </Popup>
          <Popup
            placement="bottom-end"
            body={
              <div className="flex !max-w-96 flex-col">
                {profileMenuItems.map((element, index) =>
                  element ? (
                    <div
                      className="cursor-pointer px-1 py-2 text-left font-bold text-blue-800 hover:text-blue-300 second:font-normal"
                      key={index}
                    >
                      {element.map((item, i) => (
                        <div
                          className="cursor-pointer px-1 py-2 text-left text-blue-800 hover:text-blue-300"
                          key={i}
                          onClick={() => getSelectedValue(item.title)}
                        >
                          {item.title}
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : null,
                )}
              </div>
            }
            id="Notifications"
          >
            <div className="relative flex size-9 cursor-pointer items-center justify-center rounded-full">
              {session.data?.user?.profile?.avatar ? (
                <img
                  className="size-full rounded-full object-cover"
                  src={session.data?.user.profile.avatar}
                />
              ) : (
                <NoAvatarIcon />
              )}
            </div>
          </Popup>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-[0px] z-10 flex h-[64px] items-center justify-around border-t border-solid border-t-[#DDDDDD] bg-white md:hidden">
        {navItems.map((item, index) =>
          item.subItems ? (
            <>
              <div>
                <NavMenuIcon
                  color={
                    !item.exact && pathname.includes(item.link || ' ')
                      ? '#0052cc'
                      : 'rgb(106, 106, 106)'
                  }
                />
                <button
                  className={cn(
                    'relative flex max-h-4.5 cursor-pointer bg-transparent',
                    styles.popoverButton,
                  )}
                  popoverTarget={item.subItems ? `${index}-header-popover` : ''}
                >
                  <span className="mt-1 text-[0.625rem]">{item.title}</span>
                </button>
              </div>

              <div
                popover="auto"
                id={`${index}-header-popover`}
                className={cn(
                  'absolute z-100 mt-8.5 min-w-60 cursor-default flex-col rounded-xl bg-white py-5 shadow-dropdown',
                  styles.dropdown,
                )}
              >
                {item.subItems.map((subitemGroup, i) => (
                  <Fragment key={i}>
                    {subitemGroup.map((subitem, index) => (
                      <p
                        key={index}
                        className="cursor-pointer px-4 py-3 text-sm font-medium hover:bg-gray-f7"
                      >
                        {subitem.label}
                      </p>
                    ))}
                    <div className="my-2 h-0.25 bg-gray-d last:hidden" />
                  </Fragment>
                ))}
              </div>
            </>
          ) : (
            <Link
              role="none"
              href={item.link}
              key={item.id}
              className={cn(
                'before:scale-1 relative flex cursor-pointer flex-col items-center font-medium text-gray-600 before:absolute before:left-1/2 before:top-6 before:-ml-2 before:hidden before:h-0.5 before:w-4.5 before:rounded-1 before:bg-blue-500 md:block',
                {
                  'text-blue-500':
                    pathname === item.link ||
                    (!item.exact && pathname.includes(item.link || ' ')),
                },
              )}
            >
              <item.icon
                color={
                  pathname === item.link ||
                  (!item.exact && pathname.includes(item.link || ' '))
                    ? '#0052cc'
                    : 'rgb(106, 106, 106)'
                }
              />
              <button
                className={cn(
                  'relative flex max-h-4.5 cursor-pointer bg-transparent',
                  styles.popoverButton,
                )}
                popoverTarget={item.subItems ? `${index}-header-popover` : ''}
              >
                <p className="mt-1 text-[0.625rem]">{item.title}</p>
              </button>
            </Link>
          ),
        )}
      </div>

      <ModalForBoxes
        openModal={showModal}
        isShowFooter={false}
        setOpenModal={setShowModal}
      >
        <div>
          <div className="flex items-end justify-between rounded-xl border border-gray-d p-6">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">{t('Translation')}</h4>
              <p className="text-sm text-gray-600">
                Automatically translate descriptions and reviews to English.
              </p>
            </div>

            <ToggleCheckbox id="translation" />
          </div>
        </div>
        <div className="my-10" onClick={() => changeLanguage('de')}>
          <h2>{t('SuggestedLanguageRegion')}</h2>
          <div className="flex gap-4">
            <div className="my-4 cursor-pointer rounded-xl border border-gray-light p-4 hover:border-gray-33">
              <p>Deutsch</p>
              <p className="text-gray-600">Deutschland</p>
            </div>
          </div>
        </div>
        <h2>{t('ChooseLanguage')}</h2>
        <div className="flex gap-4">
          {languages.map((language, i) => (
            <div
              key={i}
              className="my-4 cursor-pointer rounded-xl border border-gray-light p-4 hover:border-gray-33"
              onClick={() => changeLanguage(language.value)}
            >
              <p>{language.label}</p>
              <p className="text-gray-600">{language.region}</p>
            </div>
          ))}
        </div>
      </ModalForBoxes>
    </>
  );
};
