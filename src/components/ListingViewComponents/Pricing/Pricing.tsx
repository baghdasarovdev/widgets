import React from 'react';
import { Box, Flex, ToggleCheckbox } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { OpenNewPageIcon } from '@/assets/icons/OpenNewPageIcon';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { discountData } from '@/components/ListingViewComponents/Pricing/constants';

export const Pricing = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('pricingDescription')}</p>
      </SharedHeaderDescription>
      <div>
        <div className="mt-8 flex flex-wrap items-center justify-between 2sm:mt-12">
          <h2 className="text-xxl font-semibold lgx:text-lg">
            {t('nightlyPrice')}
          </h2>
          <div className="flex items-center">
            <span className="mr-1 text-sm text-gray-600">
              {t('smartPricing')}
            </span>
            <ToggleCheckbox id="1" />
          </div>
        </div>
        <div
          className="mt-8 cursor-pointer rounded-xl border border-gray-light p-5"
          role="button"
        >
          <h2 className="font-extrabold">23 €</h2>
        </div>
        <div className="mt-4 flex cursor-pointer flex-wrap justify-between rounded-xl border border-gray-light p-5 text-sm text-gray-600 2sm:flex-nowrap 2sm:p-8">
          <p>{t('customWeekendPrice')}</p>
          <PlusIcon />
        </div>
        <div className="mb-6 mt-12 2sm:mt-8">
          <h2 className="text-xxl font-semibold lgx:text-lg">
            {t('discounts')}
          </h2>
        </div>
        <Flex align="stretch" direction="column" gap="lg">
          {discountData(t).map((data, index) => (
            <Box
              borderColor="#DDDDDD"
              key={index}
              radius="md"
              size="2sm-md"
              withBorders
            >
              <p className="mb-2.5 text-sm text-gray-600">
                {data.smallHeading}
              </p>
              <Flex justify="space-between" align="flex-end">
                <p className="text-2xxl font-bold leading-[30px] text-neutral-blue">
                  {data.bigHeading}
                </p>
                <p className="text-sm text-gray-600">{data.text}</p>
              </Flex>
            </Box>
          ))}
        </Flex>
        <div className="my-12">
          <Flex align="center" radius="base" bgColor="#f7f7f7" size="md">
            <OpenNewPageIcon />
            <p className="ms-2.5 font-medium leading-5 text-neutral-blue">
              {t('findMoreDiscounts')}
            </p>
          </Flex>
        </div>
      </div>
    </div>
  );
};
