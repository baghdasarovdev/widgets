import { AmenitiesPanel } from '@/components/SecondaryPanel/Amenities/AmenitiesPanel';
import { BookingSettingsPanel } from '@/components/SecondaryPanel/BookingSettingsPanel/BookingSettingsPanel';
import { CancellationPolicyPanel } from '@/components/SecondaryPanel/CancellationPolicyPanel/CancellationPolicyPanel';
import { DescriptionPanel } from '@/components/SecondaryPanel/Description/DescriptionPanel';
import { PricingPanel } from '@/components/SecondaryPanel/Pricing/PricingPanel';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const modalData = [
  LISTING_EDITOR_SECTION_NAME.TITLE,
  LISTING_EDITOR_SECTION_NAME.PROPERTY_TYPE,
  LISTING_EDITOR_SECTION_NAME.NUMBER_OF_GUESTS,
  LISTING_EDITOR_SECTION_NAME.AVAILABILITY,
  LISTING_EDITOR_SECTION_NAME.PRICING,
  LISTING_EDITOR_SECTION_NAME.ACCESSIBILITY_FEATURES,
  LISTING_EDITOR_SECTION_NAME.COHOSTS,
  LISTING_EDITOR_SECTION_NAME.ABOUT_HOST,
  LISTING_EDITOR_SECTION_NAME.DIRECTIONS,
  LISTING_EDITOR_SECTION_NAME.CHECK_IN_METHOD,
  LISTING_EDITOR_SECTION_NAME.WIFI_DETAILS,
  LISTING_EDITOR_SECTION_NAME.INTERACTION_PREFERENCES,
  LISTING_EDITOR_SECTION_NAME.CHECKIN_CHECKOUT,
  LISTING_EDITOR_SECTION_NAME.CUSTOM_LINK,
];

export const secondaryPanelMapping = {
  Description: <DescriptionPanel />,
  Pricing: <PricingPanel />,
  'Cancellation policy': <CancellationPolicyPanel />,
  Amenities: <AmenitiesPanel />,
  'Booking settings': <BookingSettingsPanel />,
};
