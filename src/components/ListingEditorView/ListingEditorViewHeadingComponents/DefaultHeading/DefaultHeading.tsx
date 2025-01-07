import React, { type FC } from 'react';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { type HeadingPropsT } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/types';
import { useAppDispatch } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import { changeShowDetails } from '@/redux/slices/secondaryPanel/slice';

export const DefaultHeading: FC<HeadingPropsT> = ({ title }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full 2sm:hidden">
      <div className="flex w-full items-center justify-between pb-6 2sm:w-max 2sm:p-0">
        <div>
          <div
            onClick={() => {
              dispatch(changeShowDetails(false));
              dispatch(listingEditorData(''));
            }}
          >
            <LeftArrow />
          </div>
        </div>
      </div>
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};
