import { AirConditioningIcon } from '@/assets/icons/AirConditioningIcon';
import { BabyBathIcon } from '@/assets/icons/BabyBathIcon';
import { BabyMonitorIcon } from '@/assets/icons/BabyMonitorIcon';
import { BabySafetyGatesIcon } from '@/assets/icons/BabySafetyGatesIcon';
import { BabysitterRecommendationsIcon } from '@/assets/icons/BabysitterRecommendationsIcon';
import { BathtubIcon } from '@/assets/icons/BathtubIcon';
import { BedLinensIcon } from '@/assets/icons/BedLinensIcon';
import { BidetIcon } from '@/assets/icons/BidetIcon';
import { BreadMakerIcon } from '@/assets/icons/BreadMakerIcon';
import { BreakfastIcon } from '@/assets/icons/BreakfastIcon';
import { ChangingTableIcon } from '@/assets/icons/ChangingTableIcon';
import { CheckCircleActive } from '@/assets/icons/CheckCircleActive';
import { ChildrenBikesIcon } from '@/assets/icons/ChildrenBikesIcon';
import { ClothingStorageIcon } from '@/assets/icons/ClothingStorageIcon';
import { CribIcon } from '@/assets/icons/CribIcon';
import { DedicatedWorkspaceIcon } from '@/assets/icons/DedicatedWorkspaceIcon';
import { DryerIcon } from '@/assets/icons/DryerIcon';
import { ElevatorIcon } from '@/assets/icons/ElevatorIcon';
import { EvChargerIcon } from '@/assets/icons/EvChargerIcon';
import { ExerciseEquipmentIcon } from '@/assets/icons/ExerciseEquipmentIcon';
import { HeatingIcon } from '@/assets/icons/HeatingIcon';
import { KitchenIcon } from '@/assets/icons/KitchenIcon';
import { OutdoorKitchenIcon } from '@/assets/icons/OutdoorKitchenIcon';
import { OutDoorsIcon } from '@/assets/icons/OutDoorsIcon';
import { OutletCoversIcon } from '@/assets/icons/OutletCoversIcon';
import { PaidParkingIcon } from '@/assets/icons/PaidParkingIcon';
import { PlusCircleWithBackGround } from '@/assets/icons/PlusCircleWithBackGround';
import { PoolIcon } from '@/assets/icons/PoolIcon';
import { RoomDarkeningShadesIcon } from '@/assets/icons/RoomDarkeningShadesIcon';
import { TableCornerGuardsIcon } from '@/assets/icons/TableCornerGuardsIcon';
import { TravelCribIcon } from '@/assets/icons/TravelCribIcon';
import { TVIcon } from '@/assets/icons/TVIcon';
import { WasherIcon } from '@/assets/icons/WasherIcon';
import { WaterfrontIcon } from '@/assets/icons/WaterfrontIcon';
import { WifiIcon } from '@/assets/icons/WifiIcon';
import { type TFunctionT } from '@/types/utils';

const amenitiesData = (t: TFunctionT) => [
  {
    icon: AirConditioningIcon,
    name: t('airConditioning'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: BabyBathIcon,
    name: t('babyBath'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: BabyMonitorIcon,
    name: t('babyMonitor'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: BabySafetyGatesIcon,
    name: t('babySafetyGates'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: BabysitterRecommendationsIcon,
    name: t('babysitterRecommendations'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: BathtubIcon,
    name: t('bathtub'),
    secondIcon: PlusCircleWithBackGround,
  },
  { icon: BedLinensIcon, name: t('bedLinens'), secondIcon: CheckCircleActive },
  { icon: BidetIcon, name: t('bidet'), secondIcon: PlusCircleWithBackGround },
  {
    icon: BreadMakerIcon,
    name: t('breadMaker'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: BreakfastIcon,
    name: t('breakfast'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: ChangingTableIcon,
    name: t('changingTable'),
    description: t('changingTableDescription'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: ChildrenBikesIcon,
    name: t('childrensBikes'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: ClothingStorageIcon,
    name: t('clothingStorage'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: CribIcon,
    name: t('crib'),
    description: t('cribDescription'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: DedicatedWorkspaceIcon,
    name: t('dedicatedWorkspace'),
    description: t('dedicatedWorkspaceDescription'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: DryerIcon,
    name: t('dryer'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: ElevatorIcon,
    name: t('elevator'),
    description: t('elevatorDescription'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: EvChargerIcon,
    name: t('evCharger'),
    description: t('evChargerDescription'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: ExerciseEquipmentIcon,
    name: t('exerciseEquipment'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: HeatingIcon,
    name: t('heating'),
    description: t('heatingDescription'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: KitchenIcon,
    name: t('kitchen'),
    description: t('kitchenDescription'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: OutdoorKitchenIcon,
    name: t('outdoorKitchen'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: OutDoorsIcon,
    name: t('outdoorShower'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: OutletCoversIcon,
    name: t('outletCovers'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: TravelCribIcon,
    name: t('packNPlayTravelCrib'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: PaidParkingIcon,
    name: t('paidParkingOnPremises'),
    description: t('paidParkingOnPremisesDescription'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: PoolIcon,
    name: t('pool'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: RoomDarkeningShadesIcon,
    name: t('roomDarkeningShades'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: TableCornerGuardsIcon,
    name: t('tableCornerGuards'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: TVIcon,
    name: t('tv'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: WasherIcon,
    name: t('washer'),
    secondIcon: CheckCircleActive,
  },
  {
    icon: WaterfrontIcon,
    name: t('waterfront'),
    secondIcon: PlusCircleWithBackGround,
  },
  {
    icon: WifiIcon,
    name: t('wifi'),
    description: t('wifiDescription'),
    secondIcon: CheckCircleActive,
  },
];

export { amenitiesData };
