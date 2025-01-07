/* eslint-disable absolute-imports/only-absolute-imports */
import React, { useState } from 'react';
import { InputValidation, List, ModalForBoxes } from '@resido-fhm/ui-kit';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { PhotoCameraIcon } from '@/assets/icons/PhotoCameraIcon';
import { AddInterests } from '@/components/ListingViewComponents/AboutHost/AddInterests';
import { infoData } from '@/components/ListingViewComponents/AboutHost/constants';
import { CountriesCarousel } from '@/components/ListingViewComponents/AboutHost/CountriesCarousel';

import silverImage from '../../../../public/images/silver.png';

export const AboutHost = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const t = useTranslations();

  const InfoDataT = infoData(t);

  return (
    <div className="w-full">
      <div>
        <div className="relative flex justify-center text-center 2sm:inline-block">
          <div>
            <Image
              src={silverImage}
              alt={t('About Host')}
              width={200}
              className="rounded-full"
            />
            <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center rounded-20 bg-white px-4 py-2.5">
              <PhotoCameraIcon />
              <span className="ml-2 text-sm font-semibold">{t('edit')}</span>
            </div>
          </div>
        </div>
        <div className="mt-11 md:mt-8 2sm:mt-11">
          <h2 className="2sm:hidden">{t('yourProfile')}</h2>
          <div className="my-2 text-gray-600 2sm:my-0">
            {t('theInformationYouShare')}
            <span className="ml-1 cursor-pointer font-semibold underline">
              {t('learnMore')}
            </span>
          </div>
        </div>
        <div>
          <List>
            {InfoDataT.map((item, index) => (
              <div
                key={index}
                className="w-full"
                onClick={() => setShowModal(true)}
              >
                <List.ListItem
                  hoverStyles={{ backgroundColor: '#f7f7f7' }}
                  hoverable
                  withDivider
                  dividerColor="#ddd"
                  size="md-sm"
                  radius="base"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-[#6b6f72]">{item.label}</p>
                  </div>
                </List.ListItem>
              </div>
            ))}
          </List>
        </div>
        <div className="mt-8">
          <h2>{t('aboutYou')}</h2>
          <div
            className="mt-8 rounded-xl border border-dashed border-neutral-blue p-5"
            onClick={() => setShowModal(true)}
          >
            <p className="text-gray-600">{t('writeSomethingFunAndPunchy')}.</p>
            <p className="mt-3 cursor-pointer font-bold text-neutral-blue underline">
              {t('addIntro')}
            </p>
          </div>
        </div>
        <div className="my-10 border-b border-gray-d"></div>
        <AddInterests />
        <div className="my-10 border-b border-gray-d"></div>
        <div className="max-w-200 overflow-x-hidden pb-6 md:pb-10">
          <CountriesCarousel />
        </div>
        <ModalForBoxes
          title={' '}
          openModal={showModal}
          isShowFooter={true}
          setOpenModal={setShowModal}
          saveButtonLabel={t('save')}
          cancelButtonLabel={t('cancel')}
        >
          <h2>{t('whereDidYouGoToSchool')}</h2>
          <p className="mt-5">{t('whetherHomeschool')}</p>
          <div className="my-5">
            <InputValidation validationstyles={false} type="text" />
          </div>
        </ModalForBoxes>
      </div>
    </div>
  );
};
