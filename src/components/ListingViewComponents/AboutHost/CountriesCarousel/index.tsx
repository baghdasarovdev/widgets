import React, { type FC, useState } from 'react';
import { Carousel, ToggleCheckbox } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { countryArray } from '@/components/ListingViewComponents/AboutHost/constants';
import styles from '@/components/ListingViewComponents/AboutHost/CountriesCarousel/index.module.scss';
import { cn } from '@/helper';

export const CountriesCarousel: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations();

  const handleChange = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl text-neutral-blue">{t('whereYouHaveBeen')}</h2>
          <p className="mt-2.5 text-gray-600">
            {t('chooseWhetherOtherPeople')}
          </p>
        </div>
        <ToggleCheckbox id="1" handleChange={(e) => handleChange(e)} />
      </div>
      <Carousel disabled={!isActive} gap="default">
        {countryArray?.map((country, index) => (
          <div
            key={index}
            className={cn('min-w-50 text-center text-gray-600', styles.slide)}
          >
            <img src={country.icon} alt="Country" width={200} height={120} />
            <p>{country.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
