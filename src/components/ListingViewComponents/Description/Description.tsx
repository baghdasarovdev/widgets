import React, { useMemo, useState } from 'react';
import { Flex, List, ModalForBoxes } from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { LampIcon } from '@/assets/icons/LampIcon';
import { descriptionData } from '@/components/ListingViewComponents/Description/constants';
import { DescriptionPanel } from '@/components/SecondaryPanel/Description/DescriptionPanel';
import { useAppDispatch } from '@/redux/hooks';
import {
  changePanelContent,
  changeShowDetails,
} from '@/redux/slices/secondaryPanel/slice';

export const Description = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>();

  const t = useTranslations();
  const dispatch = useAppDispatch();

  const handleItemClick = (
    item: { headingText: string; text: string },
    i: number,
  ) => {
    if (window.innerWidth < 950) {
      setShowModal(!showModal);
    } else {
      dispatch(changeShowDetails(true));
    }

    dispatch(
      changePanelContent({
        content: { title: item.headingText, description: item.text },
      }),
    );
    setSelectedItem(i);
  };

  const data = useMemo(() => descriptionData(t), [t]);

  return (
    <div className="flex h-[calc(100vh-240px)] flex-col justify-between">
      <div>
        <div>
          <List gap="sm">
            {data.map((el, i) => (
              <List.ListItem
                key={i}
                selectable
                hoverable
                gutterPadding
                onClick={() => handleItemClick(el, i)}
                radius="base"
                size="md"
                isSelected={selectedItem === i}
                hoverStyles={{ backgroundColor: '#f7f7f7' }}
                selectedStyles={{ backgroundColor: '#f7f7f7' }}
              >
                <Flex justify="space-between" align="center">
                  <p className="text-base font-bold text-neutral-blue">
                    {el.headingText}
                  </p>
                  <ChevronRightIcon />
                </Flex>
                <p className="mt-3.5 pe-10 text-base text-gray-600">
                  {el.text}
                </p>
              </List.ListItem>
            ))}
          </List>
        </div>
      </div>
      <ModalForBoxes
        title={' '}
        openModal={showModal}
        isShowFooter={true}
        setOpenModal={setShowModal}
        saveButtonLabel={t('save')}
        cancelButtonLabel={t('cancel')}
      >
        <DescriptionPanel />
      </ModalForBoxes>
      <div className="absolute bottom-20 right-5 md:bottom-5 2sm:left-1/2 2sm:-translate-x-1/2 2sm:translate-y-1/2">
        <LampIcon />
      </div>
    </div>
  );
};
