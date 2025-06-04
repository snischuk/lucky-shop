import type { FC } from 'react';

import { HeroSection } from '../components/home/HeroSection';
import { HERO_SLIDES } from '../constants/hero';

const HomePage: FC = () => (
  <>
    <HeroSection slides={HERO_SLIDES} />
  </>
);

export { HomePage };
