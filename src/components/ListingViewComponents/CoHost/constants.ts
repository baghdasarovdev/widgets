import { LetterIcon } from '@/assets/icons/LetterIcon';
import { SearchIcon } from '@/assets/icons/SearchIcon';
import { type TFunctionT } from '@/types/utils';

const data = (t: TFunctionT) => [
  {
    icon: LetterIcon,
    title: t('inviteSomeoneTitle'),
    description: t('inviteSomeoneDescription'),
  },
  {
    icon: SearchIcon,
    title: t('findSomeoneTitle'),
    description: t('findSomeoneDescription'),
  },
];

export { data };
