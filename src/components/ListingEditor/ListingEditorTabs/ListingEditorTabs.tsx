/* eslint-disable absolute-imports/only-absolute-imports */
import React, { useState } from 'react';
import { Flex, List, Location, ModalForBoxes } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { TabContainer } from '@/app/hosting/listings/editor/details/_components/TabsContainer';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { RightArrow } from '@/assets/icons/RightArrow';
import { ArrivalGuide } from '@/components/ListingEditor/ArrivalGuide/ArrivalGuide';
import { AboutHost } from '@/components/ListingEditor/ListingEditorTabs/AboutHost';
import { CoHost } from '@/components/ListingEditor/ListingEditorTabs/CoHost';
import {
  boxesData,
  componentsThatWillNotShowFooter,
  ListingData,
  showComponent,
} from '@/components/ListingEditor/ListingEditorTabs/ListingData';
import { PhotoTour } from '@/components/ListingEditor/ListingEditorTabs/PhotoTour';
import { TabWrapper } from '@/components/ListingEditor/ListingEditorTabs/TabWrapper';
import { Tabs } from '@/components/ListingEditor/Tabs/Tabs';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppSelector } from '@/redux/hooks';
import { listingEditorSelectors } from '@/redux/slices/listingEditor/selectors';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const ListingEditorTabs = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { name } = useAppSelector(listingEditorSelectors);
  const { tab } = useAppSelector(listingEditorSelectors);
  const t = useTranslations();

  return (
    <Flex justify="center" direction="column">
      <div className="w-full px-5 pb-4 md:flex md:items-center md:gap-1.5 md:px-10 2sm:my-6 2sm:px-0 2sm:pl-17 2sm:pr-16">
        <Tabs />
        <div className="hidden 2sm:block">
          <IconWrapper>
            <FilterIcon />
          </IconWrapper>
        </div>
      </div>
      <TabContainer>
        {tab === 1 ? (
          <>
            <TabWrapper href="/hosting/listings/verify-listing/123">
              <Flex justify="space-between" align="center">
                <div className="mr-2 size-2 rounded-full bg-red-500" />
                <p className="grow font-bold text-neutral-blue">
                  {t('completeTheNecessarySteps')}
                </p>
                <RightArrow />
              </Flex>
              <p className="mt-2 text-gray-600">{t('finishThese')}</p>
            </TabWrapper>

            <TabWrapper
              title={LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR}
              setModal={setShowModal}
            >
              <PhotoTour />
            </TabWrapper>
            {boxesData(t).map((data, index) => (
              <TabWrapper
                key={index}
                title={data.title}
                setModal={setShowModal}
              >
                <p className="text-xl font-bold text-neutral-blue">
                  {data.translation}
                </p>
                <p className="mt-2 text-gray-600 group-first:text-2xl group-first:font-bold">
                  {data.desc}
                </p>
              </TabWrapper>
            ))}
            <TabWrapper
              setModal={setShowModal}
              title={LISTING_EDITOR_SECTION_NAME.LOCATION}
            >
              <Location
                title={t(LISTING_EDITOR_SECTION_NAME.LOCATION)}
                locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60231.51494351782!2d2.643648067879058!3d39.572850144972534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979259c61ac757%3A0xc40d5406c3d058c6!2sPalma%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sam!4v1726040478178!5m2!1sen!2sam"
                description="Bendergasse, 60311 Frankfurt am Main-Innenstadt I, Germany"
              />
            </TabWrapper>

            <TabWrapper
              setModal={setShowModal}
              title={LISTING_EDITOR_SECTION_NAME.ABOUT_HOST}
            >
              <AboutHost />
            </TabWrapper>
            {ListingData(t).map((item, index) => (
              <TabWrapper
                key={index}
                title={item.title}
                setModal={setShowModal}
              >
                <p className="mb-4 text-xl font-bold text-neutral-blue">
                  {item.title}
                </p>
                <List gap="lg">
                  {item.descriptionData.map((el) => (
                    <List.ListItem className="flex items-center" key={el.desc}>
                      <el.icon />
                      <span className="ms-5 text-neutral-blue">{el.desc}</span>
                    </List.ListItem>
                  ))}
                </List>
              </TabWrapper>
            ))}

            <TabWrapper
              setModal={setShowModal}
              title={LISTING_EDITOR_SECTION_NAME.COHOSTS}
            >
              <CoHost />
            </TabWrapper>
            <TabWrapper
              setModal={setShowModal}
              title={LISTING_EDITOR_SECTION_NAME.BOOKING_SETTINGS}
            >
              <p className="text-xl font-bold text-neutral-blue">
                {t('Booking settings')}
              </p>
              <p className="mt-2 text-gray-600">{t('guestsSendReservation')}</p>
            </TabWrapper>
            <TabWrapper
              setModal={setShowModal}
              title={LISTING_EDITOR_SECTION_NAME.CUSTOM_LINK}
            >
              <p className="text-xl font-bold text-neutral-blue">
                {t('Custom Link')}
              </p>
              <p className="mt-2 text-gray-600">{t('addDetails')}</p>
            </TabWrapper>
          </>
        ) : (
          <ArrivalGuide setModal={setShowModal} />
        )}
      </TabContainer>
      <ModalForBoxes
        title={name}
        openModal={showModal}
        isShowFooter={!componentsThatWillNotShowFooter.includes(name)}
        setOpenModal={setShowModal}
        cancelButtonLabel={t('cancel')}
        saveButtonLabel={t('save')}
      >
        {showComponent[name as keyof typeof showComponent]}
      </ModalForBoxes>
    </Flex>
  );
};
