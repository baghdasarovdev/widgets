import React, { useState } from 'react';
import { Radio } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { items } from '@/components/ListingViewComponents/InteractionPreferences/constants';
import { cn } from '@/helper';

export const InteractionPreferences = () => {
  const t = useTranslations();
  const [clickOnItem, setClickOnItem] = useState<number>(0);

  return (
    <div className="pb-30 2sm:pb-0">
      <SharedHeaderDescription>
        <p>{t('letGuestsKnowYouEnjoy')}</p>
      </SharedHeaderDescription>
      <div className="flex flex-col gap-7.5">
        {items(t).map((item, index) => (
          <label
            className={cn(
              'flex cursor-pointer items-center justify-between rounded-xl p-6 outline outline-gray-light',
              clickOnItem === index + 1 && 'bg-gray-f7 outline-2',
            )}
            key={index + 1}
            onClick={() => setClickOnItem(item.id)}
            htmlFor={item.id.toString()}
          >
            <span className="text-neutral-blue">{item.title}</span>
            <Radio id={item.id.toString()} />
          </label>
        ))}
      </div>
    </div>
  );
};
