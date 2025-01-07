import React, { type FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { AvatarVerifyIcon } from '@/assets/icons/AvatarVerifyIcon';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const AboutHost: FC = () => {
  const t = useTranslations();

  const image = undefined; // user image

  return (
    <>
      <div className="text-xl font-bold text-neutral-blue">
        {t(LISTING_EDITOR_SECTION_NAME.ABOUT_HOST)}
      </div>
      <div className="mx-auto mt-5 flex w-full max-w-87.5 flex-col items-center justify-between">
        <div className="relative">
          {image ? (
            <Image
              className="rounded-full"
              src={image}
              alt="user image"
              width={104}
              height={104}
            />
          ) : (
            <div className="size-26 rounded-full bg-gray-d9" />
          )}
          <div className="absolute bottom-1 right-0 flex size-7.5 items-center justify-center rounded-full bg-blue-300">
            <AvatarVerifyIcon />
          </div>
        </div>
        <p className="mt-0.75 text-3xl font-black text-neutral-blue">Elena</p>
        <p className="mt-0.75 text-sm font-medium text-gray-600">
          {t('hostSince') + ' 2024'}
        </p>
      </div>
    </>
  );
};
