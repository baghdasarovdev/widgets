import { CalendarIcon } from '@/assets/icons/CalendarIcon';
import { CarbonMonoxideIcon } from '@/assets/icons/CarbonMonoxide';
import { SecurityCameraIcon } from '@/assets/icons/SecurityCameraIcon';
import { SmokeAlarmIcon } from '@/assets/icons/SmokeAlarmIcon';
import { AboutHost } from '@/components/ListingViewComponents/AboutHost/AboutHost';
import { Accessibility } from '@/components/ListingViewComponents/AccessibilityFeatures/AccessibilityFeatures';
import { Availability } from '@/components/ListingViewComponents/Availability/Availability';
import { CheckInCheckOut } from '@/components/ListingViewComponents/CheckInCheckOut/CheckInCheckOut';
import { CheckInMethod } from '@/components/ListingViewComponents/CheckInMethod/CheckInMethod';
import { CoHost } from '@/components/ListingViewComponents/CoHost/CoHost';
import { CustomLink } from '@/components/ListingViewComponents/CustomLink/CustomLink';
import { Directions } from '@/components/ListingViewComponents/Directions/Directions';
import { HouseRules } from '@/components/ListingViewComponents/HouseRules/HouseRules';
import { InteractionPreferences } from '@/components/ListingViewComponents/InteractionPreferences/InteractionPreferences';
import { NumberOfGuests } from '@/components/ListingViewComponents/NumberOfGuests/NumberOfGuests';
import { Pricing } from '@/components/ListingViewComponents/Pricing/Pricing';
import { PropertyType } from '@/components/ListingViewComponents/PropertyType/PropertyType';
import { Title } from '@/components/ListingViewComponents/Title/Title';
import { WifiDetails } from '@/components/ListingViewComponents/WifiDetails/WifiDetails';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';
import { type TFunctionT } from '@/types/utils';

const boxesData = (t: TFunctionT) => [
  {
    title: LISTING_EDITOR_SECTION_NAME.TITLE,
    desc: ['Grünes Schloss'],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.TITLE)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.PROPERTY_TYPE,
    desc: [`${t('entireAccommodation')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.PROPERTY_TYPE)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.NUMBER_OF_GUESTS,
    desc: [`4 ${t('guests')}`],
    translation: `${t('numberOfGuests')}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.DESCRIPTION,
    desc: [`${t('enjoy')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.DESCRIPTION)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.PRICING,
    desc: [
      '23 € ' + `${t('per night')}`,
      `10% ${t('weekly')} ${t('discount')}`,
      `25% ${t('monthly')} ${t('discount')}`,
    ],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.PRICING)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.AVAILABILITY,
    desc: [`1 – 365 ${t('night stays')}`, `${t('sameDayAdvanceNotice')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.AVAILABILITY)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.AMENITIES,
    desc: [`${t('addDetails')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.AMENITIES)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.ACCESSIBILITY_FEATURES,
    desc: [`${t('addDetails')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.ACCESSIBILITY_FEATURES)}`,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.CANCELLATION_POLICY,
    desc: [`${t('flexible')}`],
    translation: `${t(LISTING_EDITOR_SECTION_NAME.CANCELLATION_POLICY)}`,
  },
];

const ListingData = (t: TFunctionT) => [
  {
    translation: t(LISTING_EDITOR_SECTION_NAME.HOUSE_RULES),
    title: LISTING_EDITOR_SECTION_NAME.HOUSE_RULES,
    descriptionData: [
      { desc: t('checkInAfter'), icon: CalendarIcon },
      { desc: t('checkOutBefore'), icon: CalendarIcon },
      { desc: t('guestMaximum'), icon: CalendarIcon },
    ],
  },
  {
    translation: t(LISTING_EDITOR_SECTION_NAME.GUEST_SAFETY),
    title: LISTING_EDITOR_SECTION_NAME.GUEST_SAFETY,
    descriptionData: [
      { desc: t('noCarbonMonoxideAlarm'), icon: CarbonMonoxideIcon },
      { desc: t('noSmokeAlarm'), icon: SmokeAlarmIcon },
      { desc: t('exteriorSecurityCamera'), icon: SecurityCameraIcon },
    ],
  },
];

const showComponent = {
  'CheckIn-CheckOut': <CheckInCheckOut />,
  Directions: <Directions />,
  'Check-in method': <CheckInMethod />,
  'Wifi details': <WifiDetails />,
  'Interaction preferences': <InteractionPreferences />,
  'House rules': <HouseRules />,
  Title: <Title />,
  'Property Type': <PropertyType />,
  Pricing: <Pricing />,
  Availability: <Availability />,
  'Number of guests': <NumberOfGuests />,
  'Accessibility features': <Accessibility />,
  CoHosts: <CoHost />,
  'Custom Link': <CustomLink />,
  'About Host': <AboutHost />,
};

export const componentsThatWillNotShowFooter = ['Checkout instructions'];

export { boxesData, ListingData, showComponent };
