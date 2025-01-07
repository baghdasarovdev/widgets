import React, { memo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useAppSelector } from '@/redux/hooks';

export const DescriptionPanel = memo(function DescriptionPanel() {
  const { title, description } = useAppSelector(
    (state) => state.showDetails.content,
  );

  const t = useTranslations();
  const [textLength, setTextLength] = useState<number>(description.length);

  return (
    <div className="relative h-vh-secondary-panel">
      <div className="md:px-9 md:pb-5">
        <h2 className="mt-3.5 text-2xl md:mt-0 md:text-3xl">{title}</h2>
        <p className="mb-2.5 mt-5 font-bold text-gray-600 md:mb-5 md:mt-11.5">
          {363 - textLength} {t('charactersAvailable')}
        </p>
        <textarea
          className="h-100 w-full resize-none border-none bg-transparent outline-none transition-all duration-300 ease-in-out"
          defaultValue={description}
          onChange={(e) => setTextLength(e.target.value.length)}
          maxLength={363}
        ></textarea>
      </div>
    </div>
  );
});
