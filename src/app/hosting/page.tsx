'use client';

import React, { useMemo } from 'react';
import { Carousel } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { HelpCenter } from '@/app/hosting/_components/HelpCenter';
import { Resources } from '@/app/hosting/_components/Resources';
import { SectionContainer } from '@/app/hosting/_components/SectionContainer';
import { SectionTitle } from '@/app/hosting/_components/SectionTitle';
import { nextSteps } from '@/app/hosting/constants';
import { Footer } from '@/layout/footer/Footer';

const Hosting = () => {
  const t = useTranslations();

  const nextStepsData = useMemo(() => nextSteps(t), [t]);

  return (
    <div className="pt-3 sm:pt-10">
      <SectionContainer>
        <div className="mx-auto my-3.5 max-w-8xl text-text-default 2xxs:my-0">
          <div className="mb-3 sm:mb-6 2sm:mb-10">
            <h2 className="text-3xl font-extrabold">{t('welcome')}, Elena!</h2>
            <p className="mt-2 text-gray-600">{t('guestsCanReserve')}</p>
          </div>
        </div>
      </SectionContainer>
      <div className="h-125 w-full bg-hostingBanner bg-cover bg--50 bg-no-repeat lg:bg-center">
        <SectionContainer className="mx-auto my-3.5 flex h-full flex-col justify-between pb-4 pt-8 2xxs:my-0">
          <div>
            <SectionTitle>{t('yourNextSteps')}</SectionTitle>
            <p>{t('timeToReview')}</p>
          </div>
          <div className="mt-3.5 flex w-full justify-between overflow-hidden 2xxs:mt-28">
            <div className="flex 2xl:block">
              <Carousel>
                {nextStepsData.map((step) => (
                  <div
                    key={step.title}
                    className="mr-5 h-48.5 w-50 shrink-0 rounded-10 bg-white px-4.5 pt-4 shadow-carouselItem"
                  >
                    <div>
                      {step.icon ? (
                        <div className="mb-6">
                          <step.icon />
                        </div>
                      ) : null}
                      <p className="mt-4 font-bold">{step.title}</p>
                      <span className="mt-2.5 text-sm">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer>
        <div className="flex flex-col gap-12 py-6 sm:gap-16 sm:py-10 2sm:py-20">
          <div className="mx-auto mt-4 w-full">
            <SectionTitle>{t('weAreHereToHelp')}</SectionTitle>
            <div className="flex xxl:w-360">
              <HelpCenter />
            </div>
          </div>
          <div className="xxl:max-w-screen-xxl">
            <SectionTitle>{t('resourcesAndTips')}</SectionTitle>
            <div className="mb-8 mt-4 flex justify-between gap-4">
              <Resources />
            </div>
          </div>
        </div>
      </SectionContainer>
      <div className="w-full bg-gray-background">
        <SectionContainer className="py-3.5 2xxs:py-6">
          <Footer />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Hosting;
