import React, { type FC } from 'react';
import { Button } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { cn } from '@/helper';

export const PanelFooterButton: FC<{ isForPanel: boolean }> = ({
  isForPanel,
}) => {
  const t = useTranslations();

  return (
    <div className="sticky bottom-0 right-0 z-3 hidden bg-white 2sm:block">
      <div
        className={cn(
          'border-gray-light, after:-left4 w-full border-b before:absolute before:w-full before:border-b before:border-gray-light after:absolute after:w-full after:border-b after:border-gray-light',
          isForPanel
            ? 'before:left-0 after:left-0'
            : 'before:left-12.5 before:right-20',
        )}
      />
      <div
        className={cn(
          'mx-auto flex max-w-200 justify-end py-8',
          isForPanel
            ? 'px-12'
            : 'px-3.5 2sm:w-116 lgx:w-128 xxl:w-152 xxxl:w-212',
        )}
      >
        <Button customAppearance="deepBlue">{t('save')}</Button>
      </div>
    </div>
  );
};
