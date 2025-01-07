'use client';
import React, { memo, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { AmenitiesHeading } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/AmenitiesHeading/AmenitiesHeading';
import { DefaultHeading } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/DefaultHeading/DefaultHeading';
import { DescriptionHeading } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/DescriptionHeading/DescriptionHeading';
import { GuidebooksHeading } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/GuidebooksHeading/GuidebooksHeading';
import { PhotoTourHeading } from '@/components/ListingEditorView/ListingEditorViewHeadingComponents/PhotoTourHeading/PhotoTourHeading';
import { componentData } from '@/components/ListingEditorView/RenderComponent';
import { cn } from '@/helper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { listingEditorSelectors } from '@/redux/slices/listingEditor/selectors';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import { showDetailsStateSelectors } from '@/redux/slices/secondaryPanel/selector';
import { changeShowDetails } from '@/redux/slices/secondaryPanel/slice';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const ListingEditorView = memo(() => {
  const { name } = useAppSelector(listingEditorSelectors);
  const { show } = useAppSelector(showDetailsStateSelectors);
  const { showMobilePanel } = useAppSelector(showDetailsStateSelectors);
  const dispatch = useAppDispatch();

  const t = useTranslations();

  const handleClickLeftArrow = () => {
    dispatch(changeShowDetails(false));
    dispatch(listingEditorData(name));
  };

  const showHeaderComponent = () => {
    switch (name) {
      case LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR:
        return <PhotoTourHeading title={name} />;
      case LISTING_EDITOR_SECTION_NAME.DESCRIPTION:
        return <DescriptionHeading title={name} />;
      case LISTING_EDITOR_SECTION_NAME.AMENITIES:
        return <AmenitiesHeading title={name} />;
      case LISTING_EDITOR_SECTION_NAME.GUIDEBOOKS:
        return <GuidebooksHeading title={name} />;
      default:
        return <DefaultHeading title={name} />;
    }
  };

  const isShowHeader = () => {
    if (
      name !== LISTING_EDITOR_SECTION_NAME.NUMBER_OF_GUESTS &&
      name !== LISTING_EDITOR_SECTION_NAME.CUSTOM_LINK &&
      !showMobilePanel
    )
      return false;

    return true;
  };

  const currentComponent = useMemo(
    () => componentData.find((item) => item.title === name)?.component,
    [name],
  );

  const RenderComponent = currentComponent || (() => <h1>{name}</h1>);

  return (
    <>
      {!isShowHeader() ? (
        <header
          className={cn(
            '[&:has(~div>.shared-description)]:pb-3 md:[&:has(~div>.shared-description)]:pb-5',
            'sticky top-0 z-3 flex items-center justify-between bg-white pb-11 pt-6 before:absolute before:inset-y-0 before:-left-6 before:right-0 before:-z-1 before:bg-white after:absolute after:inset-y-0 after:-right-6 after:left-0 after:-z-1 after:bg-white 2sm:pt-11',
          )}
        >
          {show ? (
            <div
              className="absolute -left-15 top-11 hidden 2sm:inline-block"
              onClick={handleClickLeftArrow}
            >
              <LeftArrow />
            </div>
          ) : null}
          <h1 className="hidden 2sm:block">{t(name)}</h1>
          {showHeaderComponent()}
        </header>
      ) : null}
      <RenderComponent />
    </>
  );
});

ListingEditorView.displayName = 'ListingEditorView';
