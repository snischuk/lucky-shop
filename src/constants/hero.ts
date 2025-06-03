import heroImage1 from '../assets/images/home/hero/hero-1.png';
import heroImage2 from '../assets/images/home/hero/hero-2.png';
import heroImage3 from '../assets/images/home/hero/hero-3.png';

import type { HeroSlide } from '../types/hero';

export const HERO_SLIDES: HeroSlide[] = [
  {
    url: heroImage1,
    alt: 'Банер "Літня колекція 2025"',
    textBig: '2025',
    textSmall: 'Літня колекція',
  },
  {
    url: heroImage2,
    alt: 'Банер "Нічого зайвого - тільки база"',
    textBig: 'база',
    textSmall: 'Нічого зайвого - тільки',
  },
  {
    url: heroImage3,
    alt: 'Банер "Упевнений щодня"',
    textBig: 'щодня',
    textSmall: 'Упевнений',
  },
];
