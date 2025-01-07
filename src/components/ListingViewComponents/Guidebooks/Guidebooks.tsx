import React from 'react';
import { useTranslations } from 'next-intl';

import { TrashIcon } from '@/assets/icons/TrashIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';

export const Guidebooks = () => {
  const t = useTranslations();

  return (
    <div className="pt-8 2sm:pt-6">
      <SharedHeaderDescription>
        <p>
          {t('createGuidebook')}{' '}
          <span className="font-semibold text-neutral-blue underline">
            {t('Read our content policy')}
          </span>
        </p>
      </SharedHeaderDescription>
      <div className="mt-10 flex h-72 flex-col justify-between rounded-lg bg-black bg-opacity-50 p-6 sm:w-62 2sm:mt-0">
        <div className="flex w-full justify-end">
          <div className="flex size-8 cursor-pointer items-center justify-center rounded-full border-none bg-white bg-opacity-90 shadow-icon">
            <TrashIcon />
          </div>
        </div>
        <div>
          <span className="text-xxl leading-none text-white">
            Reiseführer von Julia
          </span>
          <div className="mt-4.5 flex items-center">
            <div className="size-8 rounded-full bg-white"></div>
            <div className="ml-1 text-white">Julia</div>
          </div>
        </div>
      </div>
    </div>
  );
};
