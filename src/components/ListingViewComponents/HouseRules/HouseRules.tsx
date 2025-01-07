import React from 'react';
import { Counter } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import {
  data,
  descriptionData,
} from '@/components/ListingViewComponents/HouseRules/constants';
import { ToggleRule } from '@/components/ListingViewComponents/HouseRules/ToggleRule';

export const HouseRules = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('houseRulesDescription')}</p>
      </SharedHeaderDescription>
      <div>
        {data(t).map((item, index) => (
          <div
            className="flex w-full items-center justify-between border-b border-gray-light py-6"
            key={index}
          >
            <p className="text-neutral-blue">{item.title}</p>
            <ToggleRule />
          </div>
        ))}
        <div className="mt-6 flex items-center justify-between border-b border-gray-light pb-6">
          <p>{t('numberOfGuestsHeading')}</p>
          <Counter countDefaultNumber={1} countSize={20} countWidth={40} />
        </div>
        <div className="pb-20">
          {descriptionData(t).map((description, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-light py-6 last:border-none"
            >
              <div>
                <p className="text-base font-bold text-neutral-blue">
                  {description.headingText}
                </p>
                <div className="mt-3.5 pe-10 text-base text-gray-600">
                  {description.text}
                </div>
              </div>
              <ChevronRightIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
