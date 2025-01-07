import { PenIcon } from '@/assets/icons/PenIcon';
import { type TFunctionT } from '@/types/utils';

export type BoxT = {
  title: string;
  subtitle: string;
  icon?: () => JSX.Element;
  switcher?: boolean;
  type?: string;
};
export type DataItemT = {
  title: string;
  subtitle: string;
  boxes: BoxT[];
};
export const getData = (t: TFunctionT): DataItemT[] => [
  {
    title: t('standardPolicyTitle'),
    subtitle: t('standardPolicyDescription'),
    boxes: [
      {
        title: t('flexible'),
        subtitle: t('flexibleDescription'),
        icon: PenIcon,
        type: 'flexible',
      },
      {
        title: t('nonRefundable'),
        subtitle: t('nonRefundableDescription'),
        switcher: true,
      },
    ],
  },
  {
    title: t('longTermPolicyTitle'),
    subtitle: t('longTermPolicyDescription'),
    boxes: [
      {
        title: t('firm'),
        subtitle: t('fullRefundAfter'),
        icon: PenIcon,
        type: 'firm',
      },
    ],
  },
];
