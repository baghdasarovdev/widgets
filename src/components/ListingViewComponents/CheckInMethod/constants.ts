import { BuildingStaffIcon } from '@/assets/icons/BuildingStaffIcon';
import { KeypadIcon } from '@/assets/icons/KeypadIcon';
import { LockboxIcon } from '@/assets/icons/LockboxIcon';
import { OtherIcon } from '@/assets/icons/OtherIcon';
import { PersonGreetingIcon } from '@/assets/icons/PersonGreetingIcon';
import { SmartLockIcon } from '@/assets/icons/SmartLockIcon';
import { type TFunctionT } from '@/types/utils';

const data = (t: TFunctionT) => [
  {
    title: t('smartLock'),
    description: t('smartLockDesc'),
    icon: SmartLockIcon,
  },
  { title: t('keypad'), description: t('keypadDesc'), icon: KeypadIcon },
  { title: t('lockbox'), description: t('lockboxDesc'), icon: LockboxIcon },
  {
    title: t('buildingStaff'),
    description: t('buildingStaffDesc'),
    icon: BuildingStaffIcon,
  },
  {
    title: t('inPersonGreeting'),
    description: t('inPersonGreetingDesc'),
    icon: PersonGreetingIcon,
  },
  { title: t('other'), description: t('otherDesc'), icon: OtherIcon },
];

export { data };
