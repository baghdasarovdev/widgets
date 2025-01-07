'use client';
import { type FC, useEffect, useRef, useState } from 'react';

import {
  modalData,
  secondaryPanelMapping,
} from '@/app/hosting/listings/editor/details/constants';
import { ListingEditor } from '@/components/ListingEditor/ListingEditor';
import { ListingEditorView } from '@/components/ListingEditorView/ListingEditorView';
import { PanelFooterButton } from '@/components/SecondaryPanel/PanelFooterButton/PanelFooterButton';
import { cn } from '@/helper';
import { useAppSelector } from '@/redux/hooks';
import { listingEditorSelectors } from '@/redux/slices/listingEditor/selectors';
import { showDetailsStateSelectors } from '@/redux/slices/secondaryPanel/selector';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

const DetailsPage: FC = () => {
  const { show } = useAppSelector(showDetailsStateSelectors);
  const { name } = useAppSelector(listingEditorSelectors);
  const { title } = useAppSelector((state) => state.showDetails.content);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isAnimationStart, setIsAnimationStart] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setElementWidth(ref.current.offsetWidth);
    }
  }, [show, windowSize]);

  useEffect(() => {
    setIsAnimationStart(true);
    setTimeout(() => {
      setIsAnimationStart(false);
    }, 300);
  }, [title]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleShowBottomPanel = () => {
    switch (name) {
      case LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR:
      case LISTING_EDITOR_SECTION_NAME.PRICING:
      case LISTING_EDITOR_SECTION_NAME.DESCRIPTION:
      case LISTING_EDITOR_SECTION_NAME.AMENITIES:
      case LISTING_EDITOR_SECTION_NAME.CHECKOUT_INSTRUCTIONS:
      case LISTING_EDITOR_SECTION_NAME.GUIDEBOOKS:
      case LISTING_EDITOR_SECTION_NAME.AVAILABILITY:
      case LISTING_EDITOR_SECTION_NAME.NUMBER_OF_GUESTS:
      case LISTING_EDITOR_SECTION_NAME.ACCESSIBILITY_FEATURES:
      case LISTING_EDITOR_SECTION_NAME.CANCELLATION_POLICY:
      case LISTING_EDITOR_SECTION_NAME.LOCATION:
      case LISTING_EDITOR_SECTION_NAME.GUEST_SAFETY:
      case LISTING_EDITOR_SECTION_NAME.ABOUT_HOST:
      case LISTING_EDITOR_SECTION_NAME.COHOSTS:
      case LISTING_EDITOR_SECTION_NAME.CHECK_IN_METHOD:
        return false;
      default:
        return true;
    }
  };

  return (
    <div className="h-vh-header-mobile overflow-hidden md:h-vh-header-desktop">
      <div
        className="hidden translate-x-0 justify-center transition-transform duration-300 ease-in-out 2sm:flex"
        style={{
          transform: show ? `translateX(-${elementWidth}px)` : 'translateX(0)',
        }}
      >
        <div
          ref={ref}
          className={cn(
            'w-full',
            !show
              ? 'z-1 max-w-121 border-r border-gray-light 2lgx:ml-20 xxxl:ml-25 xxxl:max-w-140'
              : 'max-w-100 2lgx:max-w-160.5',
          )}
        >
          <ListingEditor />
        </div>
        <div
          className={cn(
            'flex h-vh-header-desktop w-full flex-col justify-between overflow-y-auto overflow-x-hidden scrollbar-gutter',
            show &&
              'transition-all duration-300 ease-in-out 2sm:px-12.5 lgx:pl-12.5 lgx:pr-0 xxl:static',
          )}
        >
          <div
            className={cn(
              'relative mx-auto mb-4 max-w-200 px-3.5 transition-all duration-300 ease-in-out 2sm:w-116 lgx:w-128 xxl:w-152 xxxl:static xxxl:w-212',
              show && 'ml-10',
            )}
          >
            <ListingEditorView />
          </div>
          {handleShowBottomPanel() && <PanelFooterButton isForPanel={false} />}
        </div>
        <div
          style={{
            right: `-${elementWidth - 2}px`,
            visibility: !show ? 'hidden' : 'visible',
          }}
          className={cn(
            'absolute w-full border-l border-gray-200 transition-transform duration-300 ease-in-out xl:max-w-160',
            isAnimationStart
              ? 'min-w-100 translate-x-full opacity-0'
              : 'z-10 flex h-vh-header-mobile max-w-100 translate-x-0 flex-col justify-between pt-11 md:h-vh-header-desktop 2lgx:max-w-142.5',
          )}
        >
          {secondaryPanelMapping[name as keyof typeof secondaryPanelMapping]}
          <PanelFooterButton isForPanel={true} />
        </div>
      </div>
      {name && !modalData.includes(name as LISTING_EDITOR_SECTION_NAME) ? (
        <div className="size-full h-vh-header-mobile overflow-y-auto overflow-x-hidden px-5 pb-6 md:h-vh-header-desktop md:overflow-x-auto md:px-10 2sm:hidden">
          <ListingEditorView />
        </div>
      ) : (
        <div className="size-full 2sm:hidden">
          <ListingEditor />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
