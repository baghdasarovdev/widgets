import React, { type FC, useLayoutEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { textFieldData } from '@/components/ListingViewComponents/Title/constants';

export const Title: FC = () => {
  const [isValidationStyle] = useState<boolean>(false);
  const [showInputCharactersLength, setShowInputCharactersLength] = useState<
    number[]
  >([0, 0, 0]);

  const t = useTranslations();

  const handleChange = (index: number, value: string) => {
    setShowInputCharactersLength((prev) => {
      const newState = [...prev];
      newState[index] = value.length;

      return newState;
    });
  };

  useLayoutEffect(() => {
    textFieldData(t).forEach((item, index) => {
      handleChange(index, item.defaultValue);
    });
  }, [t]);

  return (
    <div className="mt-0.25">
      <div className="flex flex-col gap-6">
        {textFieldData(t).map((field, index) => (
          <div key={index}>
            <field.component
              validationstyles={isValidationStyle}
              defaultValue={field.defaultValue}
              label={field.label}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(index, e.target.value)
              }
              message={field?.text}
            />
            <p className="pt-2 text-sm font-extrabold text-gray-600">
              {showInputCharactersLength[index]}/50
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
