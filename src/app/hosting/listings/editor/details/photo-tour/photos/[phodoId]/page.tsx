/* eslint-disable absolute-imports/only-absolute-imports */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { CloseIcon } from '@/assets/icons/CloseIcon';
import { DeleteIcon } from '@/assets/icons/DeleteIcon';
import { LeftArrow } from '@/assets/icons/LeftArrow';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { IconWrapper } from '@/HOC/IconWrapper';

import exterior from '../../../../../../../../../public/images/exterior.webp';

const GallerySinglePage = () => {
  const t = useTranslations();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="mb-36.5 mt-10 flex flex-col px-4.5 sm:mb-24 md:px-8 2lg:px-18">
      <div className="top-8 flex items-center justify-between md:relative">
        <div className="top-0 cursor-pointer md:absolute">
          <IconWrapper className="hidden md:flex">
            <CloseIcon
              onClick={() => {
                router.back();
              }}
            />
          </IconWrapper>
          <LeftArrow
            className="md:hidden"
            onClick={() => {
              router.back();
            }}
          />
        </div>

        <div className="flex items-center gap-3 md:absolute md:right-0 md:top-0">
          <div className="mr-3 flex cursor-pointer rounded-3xl bg-neutral-background p-3 transition-colors hover:bg-gray-light">
            {t('makeCover')}
          </div>
          <IconWrapper>
            <DeleteIcon />
          </IconWrapper>
        </div>
      </div>
      <div className="relative m-auto mt-8 flex min-w-full flex-col md:min-w-[45%]">
        <div className="relative h-80 w-full">
          <Image
            className="size-full rounded-4"
            src={exterior}
            alt="cover image"
          />
          <button className="absolute bottom-2 right-2 flex items-center gap-2 bg-[#554f4fa3] px-2 py-1 text-white backdrop-blur-md">
            <PlusIcon color="white" />
            {t('addVisualEffect')}
          </button>
        </div>
        <div className="mt-6 flex cursor-pointer items-center justify-between">
          <p className="text-gray-600">
            {t('moveFrom')} <b>{t('exterior')}?</b>
          </p>
          <ChevronRightIcon color="black" />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <span className="text-sm text-gray-600">
            <b>{300 - inputValue.length}</b>
            &nbsp;
            {t('availableCharacters')}
          </span>
          <textarea
            className="h-25 resize-none rounded-xl bg-transparent py-4 leading-4 transition-all duration-300 ease-in-out md:border md:border-solid md:border-gray-light md:p-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t('textAreaPlaceholder')}
            maxLength={300}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden w-full justify-end border-t border-solid border-gray-light py-7 2lg:flex">
        <button className="relative right-18 rounded-lg bg-gray-d p-4 text-white">
          {t('save')}
        </button>
      </div>
    </div>
  );
};

export default GallerySinglePage;
