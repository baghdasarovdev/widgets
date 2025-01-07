'use client';
import React, { type FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { imageData } from '@/components/ListingViewComponents/PhotoTour/constants';

export const PhotoTour: FC = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('managePhotos')}</p>
      </SharedHeaderDescription>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 2xxs:gap-x-4 2xxs:gap-y-10 md:grid-cols-3">
        {imageData(t).map((data, index) => (
          <div
            key={index}
            className="size-full max-h-95 min-w-full max-w-44.5 cursor-pointer 2xxs:max-w-77.5 2sm:max-w-50"
          >
            <div className="aspect-[169/192]">
              <Image
                className="size-full rounded-lg"
                src={data.image}
                alt="photo"
              />
            </div>
            <p className="pt-3 font-semibold text-neutral-blue">{data.title}</p>
            <p className="pt-1 text-sm text-gray-600">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
