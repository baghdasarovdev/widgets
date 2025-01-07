/* eslint-disable absolute-imports/only-absolute-imports */
import { CheckIcon } from '@/assets/icons/CheckIcon';
import { MessagesIcon } from '@/assets/icons/MessagesIcon';
import { ReferHostIcon } from '@/assets/icons/ReferHostIcon';
import { ReservationsIcon } from '@/assets/icons/ReservationsIcon';
import { VisitHelpCenterIcon } from '@/assets/icons/VisitHelpCenterIcon';
import { type TFunctionT } from '@/types/utils';

import Logo from '../../../../../../public/images/logo.png';

export const messageListData = [
  {
    title: 'Support',
    translate: 'Support',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Support',
    translate: 'Support',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Hosting',
    translate: 'Hosting',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Hosting',
    translate: 'Hosting',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Traveling',
    translate: 'Traveling',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Traveling',
    translate: 'Traveling',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Hosting',
    translate: 'Hosting',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Hosting',
    translate: 'Hosting',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Traveling',
    translate: 'Traveling',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
  {
    title: 'Support',
    translate: 'Support',
    description: 'How would you like to connect with us?',
    status: 'Closed',
    image: Logo,
  },
];

export const filterModalData = [
  {
    icon: CheckIcon,
    title: 'Quick replies',
    translate: 'QuickReplies',
  },
  {
    icon: CheckIcon,
    title: 'Scheduled messages',
    translate: 'ScheduledMessages',
  },
  {
    icon: CheckIcon,
    title: 'Suggested replies',
    translate: 'SuggestedReplies',
  },
  {
    icon: CheckIcon,
    title: 'Archived',
    translate: 'Archived',
  },
  {
    icon: CheckIcon,
    title: 'Give feedback',
    translate: 'GiveFeedback',
  },
];

export const getFilterData = (t: TFunctionT) => [
  { icon: MessagesIcon, label: t('All') },
  { icon: ReferHostIcon, label: t('Hosting') },
  { icon: ReservationsIcon, label: t('Traveling') },
  { icon: VisitHelpCenterIcon, label: t('Support') },
];
