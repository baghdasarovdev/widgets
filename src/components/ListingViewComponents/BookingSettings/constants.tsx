import Link from 'next/link';

import { CircularClockIcon } from '@/assets/icons/CircularClockIcon';
import { MessageIcon } from '@/assets/icons/MessageIcon';
import { TriangleWarningIcon } from '@/assets/icons/TriangleWarningIcon';
import { type TFunctionT } from '@/types/utils';

export const bookingSettingsModalData = (t: TFunctionT) => [
  {
    id: 1,
    icon: TriangleWarningIcon,
    title: t('youMayGetFewerBookings'),
    description: t('instantBookListingsAreShownHigher'),
  },
  {
    id: 2,
    icon: MessageIcon,
    title: t('needReviewEveryBookingRequest'),
    description: t('withInstantBookOff'),
  },
  {
    id: 3,
    icon: CircularClockIcon,
    title: t('needRespondEachRequest'),
    description: t('lateResponsesCanImpact'),
  },
];

export const data = (t: TFunctionT) => [
  {
    id: 1,
    title: t('requireGoodTrackRecord'),
    text: t.rich('onlyAllowGuests', {
      link: (chunks) => <Link href="#">{chunks}</Link>,
    }),
  },
  {
    id: 2,
    title: t('addCustomMessage'),
    text: t('guestsMustRead'),
  },
];
