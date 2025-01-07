'use client';
import { type FC } from 'react';
import { DynamicModal } from '@resido-fhm/ui-kit';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LeftArrow } from '@/assets/icons/LeftArrow';
import { PlusIcon } from '@/assets/icons/PlusIcon';
import { TourGallery } from '@/components/ListingViewComponents/TourGallery/TourGallery';
import { IconWrapper } from '@/HOC/IconWrapper';

const PhotoGallery: FC = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="px-3 py-10 md:px-20">
      <div className="sticky top-0 z-100 flex items-center justify-between bg-white pb-2 md:pb-11">
        <LeftArrow
          className="cursor-pointer"
          onClick={() => {
            router.back();
          }}
        />
        <h1 className="ml-30 hidden text-3xl font-bold leading-8 text-neutral-blue md:block">
          {t('allPhotos')}
        </h1>
        <div className="flex items-center gap-2">
          <div className="mr-3 flex cursor-pointer rounded-3xl bg-neutral-background p-3 transition-colors duration-300 hover:bg-gray-light">
            {t('managePhoto')}
          </div>
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
      <TourGallery />
    </div>
  );
};

export default PhotoGallery;
