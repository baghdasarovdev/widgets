/* eslint-disable absolute-imports/only-absolute-imports */

import { type TFunctionT } from '@/types/utils';

import additional from '../../../../public/images/additional.webp';
import bathroom from '../../../../public/images/bathroom.webp';
import bed from '../../../../public/images/bed.webp';
import deck from '../../../../public/images/deck.webp';
import exterior from '../../../../public/images/exterior.webp';
import table from '../../../../public/images/tableandcheirs.webp';
import workspace from '../../../../public/images/workspace.webp';

const imageData = (t: TFunctionT) => [
  { image: deck, title: `${t('livingRoom')}`, desc: `5 ${t('photos')}` },
  { image: bed, title: `${t('bedroom')}`, desc: `${t('addPhotos')}` },
  {
    image: bathroom,
    title: `${t('fullBathroom')}`,
    desc: `${t('addPhotos')}`,
  },
  { image: table, title: `${t('commonSpace')}`, desc: `${t('addPhotos')}` },
  { image: deck, title: `${t('backyard')} 1`, desc: `${t('addPhotos')}` },
  { image: exterior, title: `${t('backyard')} 2`, desc: `${t('addPhotos')}` },
  {
    image: additional,
    title: `${t('exterior')}`,
    desc: `${t('addPhotos')}`,
  },
  { image: workspace, title: `${t('commonSpace')}`, desc: `${t('addPhotos')}` },
];

export { imageData };
