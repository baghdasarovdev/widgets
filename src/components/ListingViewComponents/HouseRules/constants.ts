import { type TFunctionT } from '@/types/utils';

const data = (t: TFunctionT) => [
  {
    title: t('petsAllowedTitle'),
    text: t('petsAllowedText'),
  },
  { title: t('eventsAllowedTitle') },
  { title: t('smokingAllowedTitle') },
  { title: t('quietHoursTitle') },
  { title: t('commercialPhotographyTitle') },
];

const descriptionData = (t: TFunctionT) => [
  {
    headingText: t('checkInCheckoutHeading'),
    text: t('checkInCheckoutText'),
  },
  {
    headingText: t('additionalRulesHeading'),
    text: t('additionalRulesText'),
  },
];

export { data, descriptionData };
