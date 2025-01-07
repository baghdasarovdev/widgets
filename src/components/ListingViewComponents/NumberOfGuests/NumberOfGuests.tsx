import React from 'react';
import { Counter } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

export const NumberOfGuests = () => {
  const t = useTranslations();

  return (
    <div className="flex h-75 select-none items-center justify-center 2sm:h-vh-header-desktop 2sm:px-3.5">
      <div className="flex flex-col">
        <p className="pb-12 text-gray-600">{t('howManyGuests')}</p>
        <div>
          <Counter countDefaultNumber={1} countSize={120} countWidth={100} />
        </div>
      </div>
    </div>
  );
};
