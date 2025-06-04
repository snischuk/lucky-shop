import type { FC } from 'react';

import FindYoursSection from '../components/home/FindYoursSection';
import { HeroSection } from '../components/home/HeroSection';
import { HERO_SLIDES } from '../constants/hero';

const HomePage: FC = () => (
  <>
    <HeroSection slides={HERO_SLIDES} />
    <FindYoursSection />
  </>
);

export { HomePage };
