import React, { type FC } from 'react';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { type HeadingPropsT } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/types';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import { changeShowDetails } from '@/redux/slices/secondaryPanel/slice';

export const GuidebooksHeading: FC<HeadingPropsT> = ({ title }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div>
          <div
            className="pb-6 2sm:hidden"
            onClick={() => {
              dispatch(changeShowDetails(false));
              dispatch(listingEditorData(''));
            }}
          >
            <LeftArrow />
          </div>
        </div>
        <div>
          <IconWrapper>
            <PlusIcon />
          </IconWrapper>
        </div>
      </div>
      <h1 className="inline-block text-2xl 2sm:hidden">{title}</h1>
    </div>
  );
};
