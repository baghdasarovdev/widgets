import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn, handleCheckMobileView } from '@/helper';
import { useAppDispatch } from '@/redux/hooks';
import {
  listingEditorData,
  listingEditorTab,
} from '@/redux/slices/listingEditor/slice';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const Tabs = () => {
  const t = useTranslations();
  const [active, setActive] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleChange = (value: number) => {
    setActive(value);
    dispatch(listingEditorTab(value));
    if (value === 1) {
      !handleCheckMobileView() &&
        dispatch(listingEditorData(LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR));
    } else {
      dispatch(listingEditorData(LISTING_EDITOR_SECTION_NAME.CHECKIN_CHECKOUT));
    }
  };

  return (
    <div className="flex w-full items-center gap-2">
      <button
        onClick={() => handleChange(1)}
        className={cn(
          'w-full cursor-pointer rounded-28 px-[5px] py-1 text-[13px] !leading-8 transition-all duration-300 ease-in-out md:text-sm',
          active === 1
            ? 'border border-solid border-gray-200/60 bg-white text-neutral-blue shadow-activeBtn'
            : 'border border-gray-f4f7 bg-gray-f4f7 text-neutral-silver hover:bg-gray-light',
        )}
      >
        {t('yourAccommodation')}
      </button>
      <button
        onClick={() => handleChange(2)}
        className={cn(
          'w-full cursor-pointer rounded-28 border-none bg-none px-[5px] py-1 text-[13px] !leading-8 transition-all duration-300 ease-in-out md:text-sm',
          active === 2
            ? 'border border-solid border-gray-200/60 bg-white text-neutral-blue shadow-activeBtn'
            : 'border border-gray-f4f7 bg-gray-f4f7 text-neutral-silver hover:bg-gray-light',
        )}
      >
        {t('arrivalGuide')}
      </button>
    </div>
  );
};
