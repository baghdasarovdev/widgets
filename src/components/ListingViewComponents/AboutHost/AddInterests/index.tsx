import React, { type FC } from 'react';
import { TagsCloud } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { data } from '@/components/ListingViewComponents/AboutHost/constants';

export const AddInterests: FC = () => {
  const t = useTranslations();

  const tags = data(t);

  return (
    <div>
      <h2 className="text-xl text-neutral-blue">{t('whatYouInto')}</h2>
      <p className="text-gray-600">{t('findCommonGround')}</p>
      <TagsCloud
        data={tags}
        modalDescription={t('pickSomeInterests')}
        titleColor="#6a6a6a"
        modalTitle={t('whatAreYouInto')}
        saveButtonLabel={t('save')}
        maxItemCount={20}
        initialTagCount={3}
      />
    </div>
  );
};
