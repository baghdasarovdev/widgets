import { type TFunctionT } from '@/types/utils';

const discountData = (t: TFunctionT) => [
  {
    smallHeading: t('weeklyForNights'),
    bigHeading: '10%',
    text: t('weeklyAverage'),
  },
  {
    smallHeading: t('monthlyForNights'),
    bigHeading: '25%',
    text: t('monthlyAverage'),
  },
];

export { discountData };
