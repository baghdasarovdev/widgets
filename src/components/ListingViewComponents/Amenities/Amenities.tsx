import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';

import { SharedHeaderDescription } from '@/components/ListingEditorView/shared/SharedHeaderDescription';
import { amenitiesData } from '@/components/ListingViewComponents/Amenities/constants';
import { AmenitiesPanel } from '@/components/SecondaryPanel/Amenities/AmenitiesPanel';
import { useAppSelector } from '@/redux/hooks';
import { showDetailsStateSelectors } from '@/redux/slices/secondaryPanel/selector';

export const Amenities = () => {
  const t = useTranslations();

  const scrollRef = useRef<HTMLDivElement>(null);
  const { showMobilePanel } = useAppSelector(showDetailsStateSelectors);

  return (
    <>
      {!showMobilePanel ? (
        <div>
          <SharedHeaderDescription>
            <p>{t('youHaveAddedThese')}</p>
          </SharedHeaderDescription>
          <div className="pb-6 2sm:pb-10">
            <div>
              {amenitiesData(t)?.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-4 py-6">
                    <div>
                      <data.icon />
                    </div>
                    <div>
                      <p className="text-neutral-blue">{data.name}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="2sm:hidden">
          <div
            className="h-vh-header-mobile overflow-y-scroll px-0"
            ref={scrollRef}
          >
            <AmenitiesPanel ref={scrollRef} />
          </div>
        </div>
      )}
    </>
  );
};
