import { type TFunctionT } from '@/types/utils';

const secondOptionData = (t: TFunctionT) => ({
  options: [
    { label: t('rentalUnit'), value: 'rental unit' },
    { label: t('condo'), value: 'condo' },
    { label: t('servicedApartment'), value: 'serviced apartment' },
    { label: t('loft'), value: 'loft' },
  ],
  label: t('typeOfAccommodation'),
});

const thirdOptionData = (t: TFunctionT) => ({
  options: [
    { label: t('entirePlace'), value: 'entire place' },
    { label: t('room'), value: 'room' },
    { label: t('sharedRoom'), value: 'shared room' },
  ],
  label: t('artDesInserts'),
});

export { secondOptionData, thirdOptionData };
