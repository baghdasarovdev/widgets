import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export const BookingSettingsPanel = () => {
  const t = useTranslations();
  const [textLength, setTextLength] = useState(0);

  return (
    <div className="relative h-vh-secondary-panel">
      <div className="md:px-9 md:pb-5">
        <h2 className="mt-3.5 hidden text-2xl md:text-3xl 2sm:block">
          Pre-booking message
        </h2>
        <p className="mb-2.5 mt-5 text-sm font-bold text-neutral-silver md:mb-2 md:mt-12">
          {400 - textLength} {t('charactersAvailable')}
        </p>
        <textarea
          className="h-100 w-full resize-none border-none bg-transparent !leading-4 outline-none transition-all duration-300 ease-in-out"
          placeholder="Ex: Hello! Please let me know a little about your trip and when you plan to check in."
          onChange={(e) => setTextLength(e.target.value.length)}
          maxLength={400}
        />
      </div>
    </div>
  );
};
