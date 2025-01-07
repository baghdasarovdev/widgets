import React from 'react';
import { ButtonFullWidth } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { LampIcon } from '@/assets/icons/LampIcon';
import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';

export const CheckoutInstructions = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('checkoutInstructionsDescription')}</p>
      </SharedHeaderDescription>
      <div className="h-vh-listing-tabs">
        <div className="flex h-[calc(100%-64px)] flex-col justify-between">
          <ButtonFullWidth>+ {t('addInstructionsButton')}</ButtonFullWidth>
        </div>
        <div className="sticky flex justify-end 2sm:justify-center">
          <LampIcon />
        </div>
      </div>
    </div>
  );
};
