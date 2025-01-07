import React, { forwardRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { SearchIcon } from '@/assets/icons/SearchIcon';
import { amenitiesData } from '@/components/ListingViewComponents/Amenities/constants';
import { amenitiesButtons } from '@/components/SecondaryPanel/Amenities/constants';
import { cn } from '@/helper';
import { IconWrapper } from '@/HOC/IconWrapper';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';
import {
  changeShowDetails,
  setOpenSecondaryPanelMobile,
} from '@/redux/slices/secondaryPanel/slice';

export const AmenitiesPanel = forwardRef<HTMLDivElement>((props, ref) => {
  const [showFloatingPanel, setShowFloatingPanel] = useState(false);

  const t = useTranslations();
  const dispatch = useDispatch();
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (
      buttonContainerRef.current &&
      scrollRef.current &&
      buttonContainerRef.current.offsetHeight <= scrollRef.current.scrollTop
    ) {
      setShowFloatingPanel(true);
    } else {
      setShowFloatingPanel(false);
    }

    if (buttonContainerRef.current && ref && 'current' in ref && ref.current) {
      if (buttonContainerRef.current.offsetHeight <= ref.current.scrollTop) {
        setShowFloatingPanel(true);
      } else {
        setShowFloatingPanel(false);
      }
    }
  };

  const handleGoBack = () => {
    dispatch(setOpenSecondaryPanelMobile(false));
    dispatch(changeShowDetails(false));
    dispatch(listingEditorData('Amenities'));
  };

  return (
    <div
      className="relative 2sm:h-vh-secondary-panel 2sm:overflow-y-scroll"
      onWheel={() => handleScroll()}
      ref={scrollRef}
    >
      <div className="inline-block pt-6 2sm:hidden" onClick={handleGoBack}>
        <LeftArrow />
      </div>
      <div className="relative 2sm:px-8 lg:px-15">
        <div className="relative max-w-full">
          <div className="sticky top-0 flex justify-between bg-white pb-11 pt-12 2sm:pt-0">
            <h2 className="text-2xl md:text-3xl">{t('addAmenities')}</h2>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
          </div>
          <div
            className={cn(
              'flex',
              showFloatingPanel
                ? 'sticky -top-12.5 left-0 right-0 translate-y-25 overflow-x-scroll whitespace-nowrap bg-white pb-4 pt-5 transition-transform duration-500 fill-mode-forwards'
                : 'flex-wrap pt-0.25',
            )}
            ref={buttonContainerRef}
          >
            {amenitiesButtons(t).map((label, index) => (
              <div
                className="mb-2 mr-2 flex min-h-7.5 cursor-pointer items-center justify-center rounded-20 border border-gray-d px-4 py-1 text-sm !leading-none text-neutral-blue hover:border-text-default"
                key={index}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="pt-8">
            {amenitiesData(t).map((data, index) => (
              <div key={index} className="flex w-full justify-between py-4">
                <div className="flex gap-4">
                  <div>
                    <data.icon fill="#6b6f72" />
                  </div>
                  <div className="text-neutral-blue">{data.name}</div>
                </div>
                <div>
                  <data.secondIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

AmenitiesPanel.displayName = 'AmenitiesPanel';
