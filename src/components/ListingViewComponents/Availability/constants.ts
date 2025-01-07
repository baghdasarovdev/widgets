import { type TFunctionT } from '@/types/utils';

const selectDataDay = (t: TFunctionT) => [
  { label: t('sameDay'), value: 'Same day' },
  { label: t('atLeast1Day'), value: 'At last 1 day' },
  { label: t('atLeast2Days'), value: 'At last 2 day' },
  { label: t('atLeast3Days'), value: 'At last 3 day' },
  { label: t('atLeast7Days'), value: 'At last 7 day' },
];

const selectDataTime = (t: TFunctionT) => [
  { label: `6 ${t('AM')}`, value: '6:00 AM' },
  { label: `7 ${t('AM')}`, value: '7:00 AM' },
  { label: `8 ${t('AM')}`, value: '8:00 AM' },
  { label: `9 ${t('AM')}`, value: '9:00 AM' },
  { label: `10 ${t('AM')}`, value: '10:00 AM' },
  { label: `11 ${t('AM')}`, value: '11:00 AM' },
  { label: `12 ${t('PM')}`, value: '12:00 PM' },
  { label: `1 ${t('PM')}`, value: '1:00 PM' },
  { label: `2 ${t('PM')}`, value: '2:00 PM' },
  { label: `3 ${t('PM')}`, value: '3:00 PM' },
  { label: `4 ${t('PM')}`, value: '4:00 PM' },
  { label: `5 ${t('PM')}`, value: '5:00 PM' },
  { label: `6 ${t('PM')}`, value: '6:00 PM' },
  { label: `7 ${t('PM')}`, value: '7:00 PM' },
  { label: `8 ${t('PM')}`, value: '8:00 PM' },
  { label: `9 ${t('PM')}`, value: '9:00 PM' },
  { label: `10 ${t('PM')}`, value: '10:00 PM' },
  { label: `11 ${t('PM')}`, value: '11:00 PM' },
  { label: `12 ${t('AM')}`, value: '12:00 AM' },
];

export { selectDataDay, selectDataTime };
