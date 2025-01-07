import React, { useMemo, useState } from 'react';
import {
  Button,
  DropdownWithIcons,
  Messages,
  ModalForBoxes,
} from '@resido-fhm/ui-kit';
import { useTranslations } from 'next-intl';

import {
  filterModalData,
  getFilterData,
  messageListData,
} from '@/app/hosting/messages/_components/MessageList/constants';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { SearchIcon } from '@/assets/icons/SearchIcon';
import { cn } from '@/helper';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch } from '@/redux/hooks';
import { showMessageViewMobile } from '@/redux/slices/messages/slice';

export const MessageList = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const [activeMessage, setActiveMessage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newMessageListData, setNewMessageListData] = useState(messageListData);

  const filterData = useMemo(() => getFilterData(t), [t]);

  const handleSelectedValue = (value: string) => {
    if (value === t('All')) {
      setNewMessageListData(messageListData);

      return;
    }

    const newData = messageListData.filter(
      (item) => t(item.translate) === value,
    );
    setNewMessageListData(newData);
  };

  const handleClickMessages = (messageId: number): void => {
    dispatch(showMessageViewMobile(true));
    setActiveMessage(messageId);
  };

  return (
    <div className="h-vh-header-mobile w-full overflow-x-hidden overflow-y-scroll md:max-w-137.5">
      <div>
        <div className="flex items-center justify-between px-4 pt-4 md:pr-20">
          <h1>{t('Messages')}</h1>
          <div className="flex max-h-8">
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
            <div className="ml-2.5" onClick={() => setShowModal(!showModal)}>
              <IconWrapper>
                <FilterIcon />
              </IconWrapper>
            </div>
          </div>
        </div>
        <div className="flex px-4 pt-4 md:pr-20">
          <DropdownWithIcons
            items={filterData}
            triggerLabel={t('All')}
            getSelectedValue={handleSelectedValue}
          />
          <div className="ml-2.5">
            <Button>{t('Unread')}</Button>
          </div>
        </div>
        <div className="px-4 pt-4 md:pr-16">
          {newMessageListData.map((item, index) => (
            <div
              className={cn(
                'mt-5 max-w-none cursor-pointer rounded-2xl p-4 hover:bg-gray-f7 md:max-w-100',
                activeMessage === index && 'bg-gray-f7',
              )}
              onClick={() => handleClickMessages(index)}
              key={index}
            >
              <Messages
                title={t(item.translate)}
                description={item.description}
                status={t(item.status)}
                image={item.image.src}
              />
            </div>
          ))}
        </div>
      </div>
      <ModalForBoxes
        title={t('Messaging settings')}
        openModal={showModal}
        isShowFooter={false}
        setOpenModal={setShowModal}
      >
        {filterModalData.map((data, index) => (
          <div key={index} className="mt-7.5 flex items-center">
            <div>
              <data.icon />
            </div>
            <div className="ml-5">{t(data.translate)}</div>
          </div>
        ))}
      </ModalForBoxes>
    </div>
  );
};
