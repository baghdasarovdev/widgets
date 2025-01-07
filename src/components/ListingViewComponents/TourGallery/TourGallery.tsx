import { useState } from 'react';
import { Button, ModalForBoxes } from '@resido-fhm/ui-kit';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { galleryData } from '@/components/ListingViewComponents/TourGallery/data';

export const TourGallery = () => {
  const t = useTranslations();
  const router = useRouter();

  const [showBestShotsModal, setShowBestShotsModal] = useState(true);

  const closeModal = () => {
    setShowBestShotsModal(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 2sm:grid-cols-4 2sm:gap-3 lgx:grid-cols-5">
      {galleryData.map((item) => (
        <div
          className="relative h-32.5 overflow-hidden rounded-lg 2xxs:h-48 xs:h-73 lg:h-50.5"
          key={item.id}
          role="button"
          onClick={() => {
            router.push('/hosting/listings/editor/details/photo-tour/photos/1');
          }}
        >
          <Image
            src={item.image}
            className="left-0 top-0 size-full cursor-pointer rounded-4 object-cover duration-700 hover:scale-110"
            alt="gallery item"
          />
          {/* TODO */}
          {item.id === 1 && (
            <Button className="!absolute !left-4 !top-4 hidden !rounded-2xl !bg-white !text-sm">
              {t('cover')}
            </Button>
          )}
        </div>
      ))}

      <ModalForBoxes
        title={' '}
        openModal={showBestShotsModal}
        isShowFooter={false}
        setOpenModal={setShowBestShotsModal}
      >
        <div className="flex flex-col items-center">
          <div className="mb-8 flex pb-8">
            {galleryData.slice(1, 4).map((item) => (
              <div
                key={item.id}
                className="size-21.5 rotate-[8deg] first:-rotate-[8deg] last:-rotate-[8deg]"
              >
                <Image
                  width={86}
                  height={86}
                  src={item.image}
                  alt="gallery best img"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mb-8 flex flex-col items-center gap-2">
            <h2 className="text-[28px] font-bold leading-8">
              {t('bestPhotosModalTitle')}
            </h2>
            <span className="text-gray-600">
              {t('bestPhotosModalDescription')}
            </span>
          </div>

          <div className="mb-8 flex w-[70%] flex-col items-center gap-3">
            <Button
              className="w-full !bg-black [&&]:p-6 [&&]:!text-white"
              onClick={closeModal}
            >
              {t('selectPhoto')}
            </Button>
            <Button
              className="w-full [&&]:!bg-transparent [&&]:p-6 [&&]:!text-black"
              onClick={closeModal}
            >
              {t('cancelSelected')}
            </Button>
          </div>
        </div>
      </ModalForBoxes>
    </div>
  );
};
