import { NavCalendarIcon } from '@/assets/icons/NavCalendarIcon';
import { NavListingIcon } from '@/assets/icons/NavListingIcon';
import { NavMessagesIcon } from '@/assets/icons/NavMessagesIcon';
import { NavTodayIcon } from '@/assets/icons/NavTodayIcon';
import { OpenMenuIcon } from '@/assets/icons/OpenMenuIcon';
import { type TFunctionT } from '@/types/utils';

export const languages = [
  { label: 'English', value: 'en', region: 'United States' },
  { label: 'Deutsch', value: 'de', region: 'Deutschland' },
];
export const getNavItems = (t: TFunctionT) => [
  {
    id: 1,
    title: t('today'),
    link: `/hosting`,
    exact: true,
    icon: NavTodayIcon,
  },
  {
    id: 2,
    title: t('calendar'),
    link: `#`,
    icon: NavCalendarIcon,
  },
  {
    id: 3,
    title: t('inserted'),
    link: `/hosting/listings`,
    icon: NavListingIcon,
  },
  {
    id: 4,
    title: t('Inbox'),
    link: `/hosting/messages`,
    icon: NavMessagesIcon,
  },
  {
    id: 5,
    title: t('menu'),
    icon: OpenMenuIcon,
    subItems: [
      [{ label: t('getEarlyAccess') }],
      [
        { label: t('reservations') },
        { label: t('earnings') },
        { label: t('insights') },
        { label: t('createANewListing') },
      ],
      [
        { label: t('Guidebooks') },
        { label: t('exploreHostingResources') },
        { label: t('connectWithHosts') },
      ],
    ],
  },
];

export const getProfileMenuItems = (
  t: TFunctionT,
  sessionStatus: 'authenticated' | 'unauthenticated' | 'loading',
) => [
  [
    { title: t('Profile') },
    { title: t('Account') },
    { title: t('ToHelpCenter') },
    { title: t('HelpWithSecurityProblems') },
    { title: t('Gift cards') },
  ],
  [{ title: t('Language and translation') }, { title: t('€ EUR') }],
  [
    {
      title: t('Profile'),
      desc: t('EveryHostYouInvite'),
    },
    { title: t('BecomeHostOfDiscovery') },
    { title: t('InTravelMode') },
    { title: t('Widgets') },
    {
      title: sessionStatus === 'unauthenticated' ? t('Log in') : t('Log out'),
    },
  ],
  sessionStatus === 'authenticated'
    ? [
        {
          title: t('editProfile'),
        },
      ]
    : undefined,
];
