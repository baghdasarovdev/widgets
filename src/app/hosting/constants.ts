/* eslint-disable absolute-imports/only-absolute-imports */

import { CalendarIcon } from '@/assets/icons/CalendarIcon';
import { CheckIcon } from '@/assets/icons/CheckIcon';
import { DisableIcon } from '@/assets/icons/DisableIcon';
import { DiscountIcon } from '@/assets/icons/DiscountIcon';
import { DoorIcon } from '@/assets/icons/DoorIcon';
import { HeadPhonesIcon } from '@/assets/icons/HeadPhonesIcon';
import { Lightning } from '@/assets/icons/Lightning';
import { UserMedalIcon } from '@/assets/icons/UserMedalIcon';
import { type TFunctionT } from '@/types/utils';

import image1 from '../../../public/images/phoneimage1.webp';
import image2 from '../../../public/images/phoneimage2.webp';
import image4 from '../../../public/images/phoneimage4.webp';
import image3 from '../../../public/images/phonrimage3.webp';

const nextSteps = (t: TFunctionT) => [
  {
    title: t('turnInstantBook'),
    desc: t('chooseHowGuestsWillBook'),
    icon: Lightning,
  },
  {
    title: t('setUpYourCalendar'),
    desc: t('changeWhichDatesAreAvailable'),
    icon: CalendarIcon,
  },
  {
    title: t('pickYourPolicyForCancellations'),
    desc: t('controlYourReservations'),
    icon: DisableIcon,
  },
  {
    title: t('addYourHouseRules'),
    desc: t('setExpectationsWithGuests'),
    icon: CheckIcon,
  },
  {
    title: t('offerSpecialPromotions'),
    desc: t('addDiscountsToAttractGuests'),
    icon: DiscountIcon,
  },
  {
    title: t('addCheckoutInstructions'),
    desc: t('tellGuestsTowToLockUpAndLeave'),
    icon: DoorIcon,
  },
];

const helpCenterData = (t: TFunctionT) => [
  {
    title: t('guidanceFromASuperhost'),
    desc: t('helpYouGetStarted'),
    icon: UserMedalIcon,
  },
  {
    title: t('contactSpecialisedSupport'),
    desc: t('asNewHost'),
    icon: HeadPhonesIcon,
  },
];

const resourcesAndTabs = (t: TFunctionT) => [
  {
    title: t('theMessagesTab'),
    image: image1.src,
  },
  {
    title: t('earningsDashboard'),
    image: image2.src,
  },
  {
    title: t('upgradedProfiles'),
    image: image3.src,
  },
  {
    title: t('listingsTab'),
    image: image4.src,
  },
];

export { helpCenterData, nextSteps, resourcesAndTabs };
