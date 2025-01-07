/* eslint-disable absolute-imports/only-absolute-imports */

import { ArchitectureIcon } from '@/assets/icons/ArchitectureIcon';
import { BagIcon } from '@/assets/icons/BagIcon';
import { BookIcon } from '@/assets/icons/BookIcon';
import { CookingIcon } from '@/assets/icons/CookingIcon';
import { DecadeIcon } from '@/assets/icons/DecadeIcon';
import { FoodIcon } from '@/assets/icons/FoodIcon';
import { FunFact } from '@/assets/icons/FunFact';
import { HearthIcon } from '@/assets/icons/HearthIcon';
import { LanguageSpeakIcon } from '@/assets/icons/LanguageSpeakIcon';
import { LivePlaceIcon } from '@/assets/icons/LivePlaceIcon';
import { LiveSportsIcon } from '@/assets/icons/LiveSportsIcon';
import { MoviesIcon } from '@/assets/icons/MoviesIcon';
import { MuseumIcon } from '@/assets/icons/MuseumIcon';
import { MusicIcon } from '@/assets/icons/MusicIcon';
import { OutDoorsIcon } from '@/assets/icons/OutDoorsIcon';
import { PetsIcon } from '@/assets/icons/PetsIcon';
import { PhotographIcon } from '@/assets/icons/PhotographIcon';
import { SchoolIcon } from '@/assets/icons/SchoolIcon';
import { ShoppingIcon } from '@/assets/icons/ShoppingIcon';
import { SkillIcon } from '@/assets/icons/SkillIcon';
import { SpendTime } from '@/assets/icons/SpendTime';
import { TheaterIcon } from '@/assets/icons/TheaterIcon';
import { WaterSportIcon } from '@/assets/icons/WaterSportIcon';
import { WineIcon } from '@/assets/icons/WineIcon';
import { YogaIcon } from '@/assets/icons/YogaIcon';
import { type TFunctionT } from '@/types/utils';

import berlin from '../../../../public/images/berlin.png';
import croatia from '../../../../public/images/dubrovnik.png';
import italy from '../../../../public/images/GabicceMare.png';
import spain from '../../../../public/images/Manacor.png';
import poland from '../../../../public/images/swinoujscie.png';

const infoData = (t: TFunctionT) => [
  { icon: <SchoolIcon />, label: t('whereIWentToSchool') },
  { icon: <BagIcon />, label: t('myWork') },
  { icon: <LivePlaceIcon fill="#6b6f72" />, label: t('whereILive') },
  { icon: <LanguageSpeakIcon />, label: t('languagesISpeak') },
  { icon: <DecadeIcon />, label: t('decadeIWasBorn') },
  {
    icon: <MusicIcon fill="#6b6f72" />,
    label: t('myFavoriteSongInHighSchool'),
  },
  { icon: <HearthIcon />, label: t('iAmObsessedWith') },
  { icon: <FunFact />, label: t('myFunFact') },
  { icon: <SkillIcon />, label: t('myMostUselessSkill') },
  { icon: <BookIcon fill="#6b6f72" />, label: t('myBiographyTitleWouldBe') },
  { icon: <SpendTime />, label: t('iSpendTooMuchTime') },
  { icon: <PetsIcon />, label: t('pets') },
];

const countryArray = [
  { icon: italy.src, title: 'Gabicce Mare, Italy' },
  { icon: poland.src, title: 'Świnoujście, Poland' },
  { icon: croatia.src, title: 'Dubrovnik, Croatia' },
  { icon: spain.src, title: 'Manacor, Spain' },
  { icon: berlin.src, title: 'Berlin, Germany' },
];

const data = (t: TFunctionT) => [
  { icon: OutDoorsIcon, title: t('outdoor') },
  { icon: FoodIcon, title: t('food') },
  { icon: MusicIcon, title: t('liveMusic') },
  { icon: BookIcon, title: t('reading') },
  { icon: PhotographIcon, title: t('photography') },
  { icon: MuseumIcon, title: t('museums') },
  { icon: WineIcon, title: t('wine') },
  { icon: LivePlaceIcon, title: t('history') },
  { icon: ArchitectureIcon, title: t('architecture') },
  { icon: CookingIcon, title: t('cooking') },
  { icon: YogaIcon, title: t('yoga') },
  { icon: ShoppingIcon, title: t('shopping') },
  { icon: WaterSportIcon, title: t('waterSport') },
  { icon: MoviesIcon, title: t('movies') },
  { icon: LiveSportsIcon, title: t('liveSport') },
  { icon: TheaterIcon, title: t('theater') },
];

export { countryArray, data, infoData };
