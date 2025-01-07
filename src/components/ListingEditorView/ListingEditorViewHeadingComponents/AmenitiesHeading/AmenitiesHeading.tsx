import React, { type FC } from 'react';
import { useTranslations } from 'next-intl';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { type HeadingPropsT } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/types';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import { showDetailsStateSelectors } from '@/redux/slices/secondaryPanel/selector';
import {
  changeShowDetails,
  setOpenSecondaryPanelMobile,
} from '@/redux/slices/secondaryPanel/slice';

export const AmenitiesHeading: FC<HeadingPropsT> = ({ title }) => {
  const t = useTranslations();
  const { show } = useAppSelector(showDetailsStateSelectors);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full 2sm:max-w-max">
      <div className="flex w-full items-center justify-between p-0 pb-6 2sm:w-max 2sm:p-0">
        {!show && (
          <>
            <div
              className="2sm:hidden"
              onClick={() => {
                dispatch(changeShowDetails(false));
                dispatch(listingEditorData(''));
              }}
            >
              <LeftArrow />
            </div>
            <div className="flex items-center">
              <button className="mr-2 rounded-full bg-gray-f7 px-5 py-2.5 text-sm text-neutral-blue hover:bg-gray-eb">
                {t('edit')}
              </button>
              <div
                className="inline-block 2sm:hidden"
                onClick={() => dispatch(setOpenSecondaryPanelMobile(true))}
              >
                <IconWrapper>
                  <PlusIcon />
                </IconWrapper>
              </div>
              <div
                className="hidden 2sm:inline-block"
                onClick={() => dispatch(changeShowDetails(true))}
              >
                <IconWrapper>
                  <PlusIcon />
                </IconWrapper>
              </div>
            </div>
          </>
        )}
      </div>
      <h1 className="text-2xl 2sm:hidden">{title}</h1>
    </div>
  );
};
