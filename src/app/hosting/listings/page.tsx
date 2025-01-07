/* eslint-disable absolute-imports/only-absolute-imports */
'use client';
import React, { type FC, useMemo, useState } from 'react';
import { Flex } from '@resido-fhm/ui-kit';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ChangeToGrigViewIcon } from '@/assets/icons/ChangeToGrigViewIcon';
import { ChangeToListViewIcon } from '@/assets/icons/ChangeToListViewIcon';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { SearchIcon } from '@/assets/icons/SearchIcon';
import { cn, handleCheckMobileView } from '@/helper';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch } from '@/redux/hooks';
import {
  listingEditorData,
  listingEditorTab,
} from '@/redux/slices/listingEditor/slice';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

import listingImage from '../../../../public/images/listing.webp';

const Listings: FC = () => {
  const [isShowGridIcon, setIsShowGridIcon] = useState(true);
  const [isOpenSearchPanel, setIsOpenSearchPanel] = useState(false);
  const router = useRouter();
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const ICONS = useMemo(
    () => [
      {
        id: 2,
        label: isShowGridIcon ? 'Grid' : 'List',
        component: isShowGridIcon ? ChangeToGrigViewIcon : ChangeToListViewIcon,
      },
      { id: 3, label: 'Plus', component: PlusIcon },
    ],
    [isShowGridIcon],
  );

  const handleShowIcon = (label: string) => {
    if (label === 'List') {
      setIsShowGridIcon(true);
    } else if (label === 'Grid') {
      setIsShowGridIcon(false);
    } else if (label === 'Search') {
      setIsOpenSearchPanel(true);
    }
  };

  const handleNavigate = () => {
    router.push(`/hosting/listings/editor/details`);
    !handleCheckMobileView() &&
      dispatch(listingEditorData(LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR));
    dispatch(listingEditorTab(1));
  };

  return (
    <div className="px-3 py-16 2xxs:px-20">
      {isOpenSearchPanel}
      <Flex justify="space-between">
        <div className={cn(isOpenSearchPanel && 'mr-10')}>
          <h1 className="text-3xl font-bold text-neutral-blue">
            {t('yourListing')}
          </h1>
        </div>
        <Flex className={cn(isOpenSearchPanel && 'w-3/4 max-w-287.5')}>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          {ICONS.map((Icon) => (
            <Link
              href="#"
              key={Icon.id}
              className={cn(
                isOpenSearchPanel && Icon.label === 'Search'
                  ? 'w-full'
                  : 'ml-2.5 cursor-pointer',
              )}
              onClick={() => handleShowIcon(Icon.label)}
            >
              <IconWrapper>
                <Icon.component width={24} height={24} color="#222" />
              </IconWrapper>
            </Link>
          ))}
        </Flex>
      </Flex>
      {isShowGridIcon ? (
        <div
          className="relative mt-8 cursor-pointer rounded-2xl"
          onClick={() => handleNavigate()}
        >
          <Image
            className="w-full rounded-2xl object-cover md:!w-112.5"
            src={listingImage}
            width={450}
            height={450}
            alt="listing image"
          />
          <div>
            <h4>{t('description')}</h4>
            <p className="text-gray-600">Bern, Bern</p>
          </div>
          <Flex
            align="center"
            bgColor="white"
            className="absolute left-4 top-4 rounded-3xl p-3"
          >
            <div className="mr-2.5 rounded-3xl bg-red-attention p-1"></div>
            <h4>{t('verificationRequired')}</h4>
          </Flex>
        </div>
      ) : (
        <div className="relative mt-8 cursor-pointer rounded-2xl">
          <table className="mt-8 w-full">
            <thead>
              <tr>
                <th className="text-left text-xl">{t('Listing')}</th>
                <th className="hidden text-left text-xl 2xxs:table-cell">
                  {t('Location')}
                </th>
                <th className="hidden text-left text-xl 2xxs:table-cell">
                  {t('Status')}
                </th>
              </tr>
            </thead>
            <tbody
              className="relative cursor-pointer"
              onClick={() => handleNavigate()}
            >
              <tr className="after:absolute after:inset-y-0 after:-left-2.5 after:right-0 after:-z-1 after:rounded-xl after:bg-white hover:bg-gray-f7 after:hover:bg-gray-f7">
                <td className="mt-5 rounded-xl py-3.5">
                  <Flex align="center">
                    <Image
                      className="rounded-4 object-cover"
                      src={listingImage}
                      width={60}
                      height={60}
                      alt="listing image"
                    />
                    <div className="ml-3">
                      <h4>{t('description')}</h4>
                    </div>
                  </Flex>
                </td>
                <td className="mt-5 hidden rounded-xl py-3.5 2xxs:table-cell">
                  Bern, Bern
                </td>
                <td className="mt-5 hidden rounded-xl py-3.5 2xxs:table-cell">
                  <Flex align="center">
                    <div className="mr-2.5 rounded-3xl bg-red-attention p-1"></div>
                    <h4>{t('verificationRequired')}</h4>
                  </Flex>
                </td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Listings;
