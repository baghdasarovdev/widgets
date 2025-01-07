import { type TFunctionT } from '@/types/utils';

export const stepsData = (t: TFunctionT) => [
  {
    id: 1,
    title: t('verifyListingDataPrimaryTitle'),
    description: t('verifyListingDataPrimaryDescription'),
    isRequired: true,
  },
  {
    id: 2,
    title: t('verifyListingDataSecondaryTitle'),
    description: t('verifyListingDataSecondaryDescription'),
    isRequired: true,
  },
];
