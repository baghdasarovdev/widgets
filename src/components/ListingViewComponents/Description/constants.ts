import { type TFunctionT } from '@/types/utils';

const descriptionData = (t: TFunctionT) => [
  {
    headingText: t('shortDescription'),
    text: t('thisSpecialAccommodation'),
  },
  { headingText: t('accessForGuests'), text: t('addInformation') },
  { headingText: t('interactionWithGuests'), text: t('addInformation') },
  {
    headingText: t('otherRelevantInformation'),
    text: t('additionalInformation'),
  },
  {
    headingText: t('detailedDescriptionAccommodation'),
    text: t('addInformation'),
  },
];

export { descriptionData };
