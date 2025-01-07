import React from 'react';
import { InputValidation } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';
import { DirectionClockIcon } from '@/assets/icons/DirectionCLockIcon';

const inputPlaceholder = ['wifiNetworkName', 'wifiPassword'];

export const WifiDetails = () => {
  const t = useTranslations();

  return (
    <>
      <div className="mt-0.25 flex flex-col justify-between pb-6 2sm:h-[calc(100vh-336px)] 2sm:pb-10">
        <div>
          {inputPlaceholder.map((placeholder, index) => (
            <div key={index} className="mb-7.5">
              <InputValidation
                validationstyles={false}
                placeholder={t(placeholder)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DirectionClockIcon />
        <span className="text-gray-600">{t('sharedOnceBookingConfirmed')}</span>
      </div>
    </>
  );
};
