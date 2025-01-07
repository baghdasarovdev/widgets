import React, { useState } from 'react';
import { Button, ModalForBoxes } from '@resido-fhm/ui-kit';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ConversationAction } from '@/app/hosting/messages/_components/ConversationAction';
import { MessageItem } from '@/app/hosting/messages/_components/MessageItem';
import { ArchiveIcon } from '@/assets/icons/ArchiveIcon';
import { LeftArrow } from '@/assets/icons/LeftArrow';
import { MessagesIcon } from '@/assets/icons/MessagesIcon';
import { StarIcon } from '@/assets/icons/StarIcon';
import { VisitHelpCenterIcon } from '@/assets/icons/VisitHelpCenterIcon';
import { IconWrapper } from '@/HOC/IconWrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { messagesSelectors } from '@/redux/slices/messages/selectors';
import {
  isShowMessageDetails,
  showMessageViewMobile,
} from '@/redux/slices/messages/slice';

export const MessagesView = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(messagesSelectors);

  const [showModal, setShowModal] = useState(false);

  return (
    data.showMessageView && (
      <div className="absolute bottom-0 top-14 w-full border-r border-gray-light md:static">
        <div className="border-b border-gray-light py-4 pl-3.5 md:pl-4">
          <div className="flex items-center justify-between">
            <div className="hidden items-center md:flex">
              <Image src="/images/logo.png" width={47} height={47} alt="logo" />
              <h2 className="ml-4">{t('TouristParadiseSupport')}</h2>
            </div>

            <button
              onClick={() => dispatch(showMessageViewMobile(false))}
              className="md:hidden"
            >
              <IconWrapper>
                <LeftArrow />
              </IconWrapper>
            </button>
            <div className="md:hidden">
              <Image src="/images/logo.png" width={47} height={47} alt="logo" />
            </div>
            <div className="hidden md:block">
              <Button onClick={() => dispatch(isShowMessageDetails(true))}>
                {t('ShowDetails')}
              </Button>
            </div>
            <div className="md:hidden">
              <Button onClick={() => setShowModal(true)}>{t('Details')}</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-100">
          <p className="mt-20 text-center text-sm">{t('WeMayAnalyze')}</p>
        </div>
        <div className="flex items-end p-4 md:pl-20">
          <div>
            <Image src="/images/logo.png" width={50} height={50} alt="logo" />
          </div>
          <div>
            <MessageItem>
              Hi, it seems you haven't been a host for long. Welcome! We'll
              connect you with a member of our team right away.
            </MessageItem>
            <MessageItem>How would you like to contact us?</MessageItem>
            <MessageItem>
              <div>
                <h3>{t('SelectContactMethod')}</h3>
              </div>
            </MessageItem>
          </div>
        </div>
        <div className="mt-7.5 text-center text-sm">
          {t('ThisCaseIsClosed')}
        </div>
        <ModalForBoxes
          title={' '}
          openModal={showModal}
          isShowFooter={false}
          setOpenModal={setShowModal}
        >
          <div>
            <h3 className="!my-4 !py-4">Conversation actions</h3>
            <ConversationAction icon={<MessagesIcon />}>
              Conversation actions
            </ConversationAction>
            <ConversationAction icon={<StarIcon />}>Star</ConversationAction>
            <ConversationAction icon={<ArchiveIcon />}>
              Archive
            </ConversationAction>
            <h3>Support</h3>
            <ConversationAction icon={<VisitHelpCenterIcon />}>
              Visit the Help Center
            </ConversationAction>
          </div>
        </ModalForBoxes>
      </div>
    )
  );
};
