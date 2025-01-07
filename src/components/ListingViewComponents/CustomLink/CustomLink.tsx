import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { CopyLinkIcon } from '@/assets/icons/CopyLinkIcon';
import { LampIcon } from '@/assets/icons/LampIcon';
import { cn } from '@/helper';

export const CustomLink = () => {
  const t = useTranslations();
  const [characters, setCharacters] = useState<number>(100);
  const [textareaValue, setTextAreaValue] = useState<string>('');
  const fixedPrefix = 'Vermierbereich.com';

  const handleCharacterCount = (value: string) => {
    if (value.startsWith(fixedPrefix)) {
      setTextAreaValue(value.slice(fixedPrefix.length));
    }
    setCharacters(100 - value.slice(fixedPrefix.length).length);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(fixedPrefix + textareaValue)
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

  return (
    <div>
      <div className="relative 2sm:h-[calc(100vh+200px)] 2sm:pt-37">
        <div>
          <p className="mb-4 text-sm leading-none text-gray-600 xs:mb-6 xs:text-center">
            <span className="font-bold">{characters}</span>{' '}
            {t('charactersAvailable')}
          </p>
          <div>
            <textarea
              className="h-92 w-full resize-none border-none bg-transparent text-3xl font-semibold outline-none transition-all duration-300 ease-in-out xs:h-121 xs:text-center 2sm:h-75"
              value={fixedPrefix + textareaValue}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleCharacterCount(e.target.value)
              }
              maxLength={100}
            />
          </div>
        </div>
        <div
          className={cn(
            'bottom-32.5 flex w-full cursor-pointer select-none items-center justify-center gap-1 self-center p-2.5 hover:bg-gray-f7 2sm:absolute 2sm:justify-normal 2sm:self-start',
            !textareaValue && 'cursor-not-allowed text-gray-d opacity-50',
          )}
          onClick={copyToClipboard}
        >
          <CopyLinkIcon />
          <span className="text-base">Copy link</span>
        </div>
      </div>
      <div className="sticky bottom-0 xs:bottom-9.5 xs:left-full xs:max-w-max 2sm:bottom-0 2sm:left-auto 2sm:max-w-none">
        <div className="fixed bottom-53 right-6 flex w-full max-w-max items-center justify-between xs:static 2sm:absolute 2sm:bottom-31 2sm:left-1/2 2sm:right-auto 2sm:-translate-x-1/2">
          <LampIcon />
        </div>
      </div>
    </div>
  );
};
