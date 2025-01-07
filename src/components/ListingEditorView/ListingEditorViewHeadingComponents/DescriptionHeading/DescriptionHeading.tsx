import React, { type FC } from 'react';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { type HeadingPropsT } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/types';
import { useAppDispatch } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import { changeShowDetails } from '@/redux/slices/secondaryPanel/slice';

export const DescriptionHeading: FC<HeadingPropsT> = ({ title }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="2sm:hidden">
      <div
        className="pb-6"
        onClick={() => {
          dispatch(changeShowDetails(false));
          dispatch(listingEditorData(''));
        }}
      >
        <LeftArrow />
      </div>
      <h1 className="inline-block text-2xl 2sm:text-3xl">{title}</h1>
    </div>
  );
};
