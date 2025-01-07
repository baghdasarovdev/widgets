import React from 'react';
import { useTranslations } from 'next-intl';

import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { DirectionClockIcon } from '@/assets/icons/DirectionCLockIcon';

export const Directions = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex h-[calc(100vh-182px)] flex-col justify-between pb-6 xs:h-[calc(100vh-350px)] 2sm:h-[calc(100vh-250px)] 2sm:pb-10">
        <SharedHeaderDescription>
          <p>{t('letGuestsKnow')}</p>
        </SharedHeaderDescription>
        <div className="flex items-center gap-2">
          <DirectionClockIcon />
          <span className="text-gray-600">
            {t('sharedOnceBookingConfirmed')}
          </span>
        </div>
      </div>
    </>
  );
};
