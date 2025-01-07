import { InputValidation } from '@resido-fhm/ui-kit';

import { type TFunctionT } from '@/types/utils';

const textFieldData = (t: TFunctionT) => [
  {
    component: InputValidation,
    label: 'Deutsch',
    defaultValue: 'Casa Mara',
  },
  {
    component: InputValidation,
    label: 'English',
    defaultValue: 'Casa Mara',
  },
  {
    component: InputValidation,
    text: `${t('internalTitle')}`,
    label: `${t('internalName')}`,
    defaultValue: '',
  },
];

export { textFieldData };
