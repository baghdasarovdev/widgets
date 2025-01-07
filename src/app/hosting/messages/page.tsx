'use client';
import React from 'react';

import { MessagesDetails } from '@/app/hosting/messages/_components/MessageDetails/MessagesDetails';
import { MessageList } from '@/app/hosting/messages/_components/MessageList/MessageList';
import { MessagesView } from '@/app/hosting/messages/_components/MessageView/MessagesView';
import { cn } from '@/helper';
import { useAppSelector } from '@/redux/hooks';
import { messagesSelectors } from '@/redux/slices/messages/selectors';

const Messages = () => {
  const { showDetails } = useAppSelector(messagesSelectors);

  return (
    <div className="flex justify-between">
      <MessageList />
      <MessagesView />
      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-linear',
          showDetails ? 'w-full' : 'w-0',
        )}
      >
        <MessagesDetails />
      </div>
    </div>
  );
};

export default Messages;
