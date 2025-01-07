import React from 'react';
import { useTranslations } from 'next-intl';

import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { data } from '@/components/ListingViewComponents/CoHost/constants';

export const CoHost = () => {
  const t = useTranslations();

  return (
    <div>
      <SharedHeaderDescription>
        <p>{t('coHostDescription')}</p>
      </SharedHeaderDescription>
      {data(t).map((item, index) => (
        <div
          key={index}
          className="my-5 rounded-xl border border-gray-light p-6"
        >
          <div className="inline-block">
            <item.icon width={32} height={32} />
          </div>
          <p className="my-3 font-bold text-neutral-blue">{item.description}</p>
          <p className="text-sm text-gray-600">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
