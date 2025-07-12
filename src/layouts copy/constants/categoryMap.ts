import outerwearM from '../assets/images/categories/man/outerwear.png';
import pantsM from '../assets/images/categories/man/pants.png';
import shirtsM from '../assets/images/categories/man/shirts.png';
import summerM from '../assets/images/categories/man/summer.png';
import sweatshirtsM from '../assets/images/categories/man/sweatshirts.png';
import dressesW from '../assets/images/categories/woman/dresses.png';
import outerwearW from '../assets/images/categories/woman/outerwear.png';
import pantsW from '../assets/images/categories/woman/pants.png';
import shirtsW from '../assets/images/categories/woman/shirts.png';
import summerW from '../assets/images/categories/woman/summer.png';
import sweatshirtsW from '../assets/images/categories/woman/sweatshirts.png';
import type { Gender } from '../types/Gender';

export interface CategoryInfo {
  title: string;
  image: string;
}

export const CATEGORY_MAP: Record<Gender, Record<string, CategoryInfo>> = {
  woman: {
    dresses: {
      title: 'Сукні',
      image: dressesW,
    },
    shirts: {
      title: 'Сорочки',
      image: shirtsW,
    },
    summer: {
      title: 'Літній одяг',
      image: summerW,
    },
    pants: {
      title: 'Штани',
      image: pantsW,
    },
    outerwear: {
      title: 'Верхній одяг',
      image: outerwearW,
    },
    sweatshirts: {
      title: 'Світшоти',
      image: sweatshirtsW,
    },
  },
  man: {
    shirts: {
      title: 'Сорочки',
      image: shirtsM,
    },
    summer: {
      title: 'Літній одяг',
      image: summerM,
    },
    pants: {
      title: 'Штани',
      image: pantsM,
    },
    outerwear: {
      title: 'Верхній одяг',
      image: outerwearM,
    },
    sweatshirts: {
      title: 'Світшоти',
      image: sweatshirtsM,
    },
  },
};
