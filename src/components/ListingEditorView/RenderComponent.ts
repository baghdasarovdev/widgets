import { AboutHost } from '@/components/ListingViewComponents/AboutHost/AboutHost';
import { Accessibility } from '@/components/ListingViewComponents/AccessibilityFeatures/AccessibilityFeatures';
import { Amenities } from '@/components/ListingViewComponents/Amenities/Amenities';
import { Availability } from '@/components/ListingViewComponents/Availability/Availability';
import { BookingSettings } from '@/components/ListingViewComponents/BookingSettings/BookingSettings';
import { CancellationPolicy } from '@/components/ListingViewComponents/CancellationPolicy/CancellationPolicy';
import { CheckInCheckOut } from '@/components/ListingViewComponents/CheckInCheckOut/CheckInCheckOut';
import { CheckInMethod } from '@/components/ListingViewComponents/CheckInMethod/CheckInMethod';
import { CheckoutInstructions } from '@/components/ListingViewComponents/CheckoutInstructions/CheckoutInstructions';
import { CoHost } from '@/components/ListingViewComponents/CoHost/CoHost';
import { CustomLink } from '@/components/ListingViewComponents/CustomLink/CustomLink';
import { Description } from '@/components/ListingViewComponents/Description/Description';
import { Directions } from '@/components/ListingViewComponents/Directions/Directions';
import { GuestSafety } from '@/components/ListingViewComponents/GuestSafety/GuestSafety';
import { Guidebooks } from '@/components/ListingViewComponents/Guidebooks/Guidebooks';
import { HouseRules } from '@/components/ListingViewComponents/HouseRules/HouseRules';
import { InteractionPreferences } from '@/components/ListingViewComponents/InteractionPreferences/InteractionPreferences';
import { Location } from '@/components/ListingViewComponents/Location/Location';
import { NumberOfGuests } from '@/components/ListingViewComponents/NumberOfGuests/NumberOfGuests';
import { PhotoTour } from '@/components/ListingViewComponents/PhotoTour/PhotoTour';
import { Pricing } from '@/components/ListingViewComponents/Pricing/Pricing';
import { PropertyType } from '@/components/ListingViewComponents/PropertyType/PropertyType';
import { Title } from '@/components/ListingViewComponents/Title/Title';
import { WifiDetails } from '@/components/ListingViewComponents/WifiDetails/WifiDetails';
import { LISTING_EDITOR_SECTION_NAME } from '@/types';

export const componentData = [
  { title: LISTING_EDITOR_SECTION_NAME.PHOTO_TOUR, component: PhotoTour },
  { title: LISTING_EDITOR_SECTION_NAME.TITLE, component: Title },
  { title: LISTING_EDITOR_SECTION_NAME.PROPERTY_TYPE, component: PropertyType },
  { title: LISTING_EDITOR_SECTION_NAME.PRICING, component: Pricing },
  { title: LISTING_EDITOR_SECTION_NAME.AVAILABILITY, component: Availability },
  {
    title: LISTING_EDITOR_SECTION_NAME.NUMBER_OF_GUESTS,
    component: NumberOfGuests,
  },
  { title: LISTING_EDITOR_SECTION_NAME.DESCRIPTION, component: Description },
  { title: LISTING_EDITOR_SECTION_NAME.AMENITIES, component: Amenities },
  {
    title: LISTING_EDITOR_SECTION_NAME.ACCESSIBILITY_FEATURES,
    component: Accessibility,
  },
  { title: LISTING_EDITOR_SECTION_NAME.LOCATION, component: Location },
  { title: LISTING_EDITOR_SECTION_NAME.HOUSE_RULES, component: HouseRules },
  { title: LISTING_EDITOR_SECTION_NAME.GUEST_SAFETY, component: GuestSafety },
  {
    title: LISTING_EDITOR_SECTION_NAME.CANCELLATION_POLICY,
    component: CancellationPolicy,
  },
  { title: LISTING_EDITOR_SECTION_NAME.COHOSTS, component: CoHost },
  { title: LISTING_EDITOR_SECTION_NAME.DIRECTIONS, component: Directions },
  {
    title: LISTING_EDITOR_SECTION_NAME.CHECK_IN_METHOD,
    component: CheckInMethod,
  },
  { title: LISTING_EDITOR_SECTION_NAME.WIFI_DETAILS, component: WifiDetails },
  {
    title: LISTING_EDITOR_SECTION_NAME.CHECKOUT_INSTRUCTIONS,
    component: CheckoutInstructions,
  },
  { title: LISTING_EDITOR_SECTION_NAME.GUIDEBOOKS, component: Guidebooks },
  {
    title: LISTING_EDITOR_SECTION_NAME.INTERACTION_PREFERENCES,
    component: InteractionPreferences,
  },
  {
    title: LISTING_EDITOR_SECTION_NAME.CHECKIN_CHECKOUT,
    component: CheckInCheckOut,
  },
  { title: LISTING_EDITOR_SECTION_NAME.CUSTOM_LINK, component: CustomLink },
  { title: LISTING_EDITOR_SECTION_NAME.ABOUT_HOST, component: AboutHost },
  {
    title: LISTING_EDITOR_SECTION_NAME.BOOKING_SETTINGS,
    component: BookingSettings,
  },
];
