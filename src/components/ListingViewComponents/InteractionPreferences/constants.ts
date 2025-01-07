import { type TFunctionT } from '@/types/utils';

const items = (t: TFunctionT) => [
  { title: t('notAvailable'), id: 1 },
  { title: t('helloInPerson'), id: 2 },
  { title: t('socializing'), id: 3 },
  { title: t('noPreference'), id: 4 },
];

export { items };
