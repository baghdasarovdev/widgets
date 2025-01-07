import React, { type FC } from 'react';
import { Flex } from '@resido-fhm/ui-kit';
import Image, { type ImageProps } from 'next/image';
import { useTranslations } from 'next-intl';

const photoTourDescData = ['bedroom', 'beds', 'bath'];

const FloatingImage: FC<ImageProps> = (props) => {
  return <Image className="h-full rounded-xl" {...props} />;
};

export const PhotoTour = () => {
  const t = useTranslations();

  return (
    <>
      <p className="text-xl font-bold text-neutral-blue">{t('Photo tour')}</p>
      <Flex gap="2sm" align="center">
        {photoTourDescData.map((desc, i) => (
          <React.Fragment key={i}>
            <p className="mt-2 text-gray-600">
              <span>
                {i + 2} {desc}
              </span>
            </p>
            <p className="mt-2.5 h-0.5 w-0.75 rounded-full bg-gray-default last:hidden" />
          </React.Fragment>
        ))}
      </Flex>
      <Flex
        justify="center"
        className="relative mx-auto mt-8 min-h-40 max-w-73.5"
      >
        <div className="absolute left-0 h-32 -rotate-[2deg]">
          <FloatingImage
            alt="additional"
            src="/images/deck.webp"
            width={140}
            height={140}
          />
        </div>
        <div className="absolute -top-2.5 left-1/2 z-1 h-40 -translate-x-1/2 rounded-xl shadow-photoTourItem">
          <FloatingImage
            width={160}
            height={160}
            src="/images/additional.webp"
            alt="table"
          />
        </div>
        <div className="absolute right-0 h-32 rotate-[2deg]">
          <FloatingImage
            src="/images/deck.webp"
            alt="table"
            width={140}
            height={140}
          />
        </div>
        <span className="absolute left-1/2 z-[2] -translate-x-4/5 rounded-20 bg-white px-3 py-2">
          12 {t('photos')}
        </span>
      </Flex>
    </>
  );
};
