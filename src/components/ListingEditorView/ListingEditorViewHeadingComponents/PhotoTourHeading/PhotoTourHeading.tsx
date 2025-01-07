import React, { type FC } from 'react';
import { DynamicModal } from '@resido-fhm/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CopyIcon } from '@/assets/icons/CopyIcon';
import { LeftArrow } from '@/assets/icons/LeftArrow';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { type HeadingPropsT } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/types';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch } from '@/redux/hooks';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';

export const PhotoTourHeading: FC<HeadingPropsT> = ({ title }) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full 2sm:!w-auto">
      <div className="flex w-full items-center justify-between pb-6 2sm:pb-0">
        <div
          className="2sm:hidden"
          onClick={() => dispatch(listingEditorData(''))}
        >
          <LeftArrow />
        </div>
        <div className="flex items-center">
          <Link
            className="mr-2.5 flex items-center gap-2.5 rounded-3xl bg-gray-f4f7 px-5 py-2 transition-colors duration-300 hover:bg-gray-light"
            href="/hosting/listings/editor/details/photo-tour/photos"
          >
            <CopyIcon />
            <span className="text-sm font-semibold">{t('allPhotos')}</span>
          </Link>
          <DynamicModal
            modalTriggerText={t('openModal')}
            openModalComponent={
              <IconWrapper>
                <PlusIcon />
              </IconWrapper>
            }
          />
        </div>
      </div>
      <h1 className="text-2xl 2sm:hidden">{title}</h1>
    </div>
  );
};
