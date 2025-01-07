import { CalendarIcon } from '@/assets/icons/CalendarIcon';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';
import { type TFunctionT } from '@/types/utils';

export const boxesData = (t: TFunctionT) => [
  {
    title: LISTING_EDITOR_SECTION_NAME.DIRECTIONS,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.DIRECTIONS),
    id: 1,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.CHECK_IN_METHOD,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.CHECK_IN_METHOD),
    id: 2,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.WIFI_DETAILS,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.WIFI_DETAILS),
    id: 3,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.CHECKOUT_INSTRUCTIONS,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.CHECKOUT_INSTRUCTIONS),
    id: 4,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.GUIDEBOOKS,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.GUIDEBOOKS),
    id: 5,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.INTERACTION_PREFERENCES,
    desc: [t('addDetails')],
    translation: t(LISTING_EDITOR_SECTION_NAME.INTERACTION_PREFERENCES),
    id: 6,
  },
];

export const ArrivalGuideData = (t: TFunctionT) => [
  {
    translation: t(LISTING_EDITOR_SECTION_NAME.HOUSE_RULES),
    title: LISTING_EDITOR_SECTION_NAME.HOUSE_RULES,
    descriptionData: [
      { desc: t('checkInAfter'), icon: CalendarIcon },
      { desc: t('checkOutBefore'), icon: CalendarIcon },
      { desc: t('guestMaximum'), icon: CalendarIcon },
    ],
    descriptionSize: 16,
    descriptionFont: 'normal' as const,
  },
];
