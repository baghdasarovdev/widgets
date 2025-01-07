import React from 'react';
import { DoubleSelect, Select } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { selectDataTime } from '@/components/ListingViewComponents/CheckInCheckOut/constants';

export const CheckInCheckOut = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-7.5">
        <div>
          <h3 className="mb-2.5 text-base">{t('CheckInWindow')}</h3>
          <DoubleSelect
            firstSelectOption={selectDataTime(t)}
            secondSelectOption={selectDataTime(t)}
          />
        </div>
        <div>
          <h3 className="mb-2.5 text-base">{t('CheckoutTime')}</h3>
          <Select validationstyles={false} options={selectDataTime(t)} />
        </div>
      </div>
    </>
  );
};
