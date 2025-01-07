import React, { type Dispatch, type FC, type SetStateAction } from 'react';
import { Flex, List } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { RightArrow } from '@/assets/icons/RightArrow';
import {
  ArrivalGuideData,
  boxesData,
} from '@/components/ListingEditor/ArrivalGuide/constanst';
import { TabWrapper } from '@/components/ListingEditor/ListingEditorTabs/TabWrapper';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

type ArrivalGuidePropsT = {
  setModal: Dispatch<SetStateAction<boolean>>;
};
export const ArrivalGuide: FC<ArrivalGuidePropsT> = ({ setModal }) => {
  const t = useTranslations();

  return (
    <>
      <TabWrapper href="/hosting/listings/verify-listing/123">
        <Flex justify="space-between" align="center">
          <div className="me-2 size-2 rounded-full bg-red-500" />
          <p className="grow font-semibold text-neutral-blue">
            {t('completeTheNecessarySteps')}
          </p>
          <RightArrow />
        </Flex>
        <p className="mt-2 text-gray-600">{t('finishThese')}</p>
      </TabWrapper>
      <TabWrapper
        className="flex justify-between"
        setModal={setModal}
        title={LISTING_EDITOR_SECTION_NAME.CHECKIN_CHECKOUT}
      >
        <div>
          <div className="text-xl font-bold">Check-in</div>
          <div className="mt-2">3:00 PM</div>
        </div>
        <div>
          <div className="text-xl font-bold">Checkout</div>
          <div className="mt-2">11:00 PM</div>
        </div>
      </TabWrapper>

      {boxesData(t).map((data, index) => (
        <TabWrapper key={index} title={data.title} setModal={setModal}>
          <p className="text-xl font-bold text-neutral-blue">
            {data.translation}
          </p>
          <p className="mt-2 text-gray-600">{data.desc}</p>
        </TabWrapper>
      ))}
      {ArrivalGuideData(t).map((item, index) => (
        <TabWrapper key={index} setModal={setModal} title={item.title}>
          <p className="mb-4 text-xl font-bold text-neutral-blue">
            {item.title}
          </p>
          <List gap="lg">
            {item.descriptionData.map((el) => (
              <List.ListItem className="flex items-center" key={el.desc}>
                <el.icon />
                <span className="ms-5">{el.desc}</span>
              </List.ListItem>
            ))}
          </List>
        </TabWrapper>
      ))}
    </>
  );
};
