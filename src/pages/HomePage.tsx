import type { FC } from 'react';

import { FindYoursSection } from '../components/home/FindYoursSection';
import { HeroSection } from '../components/home/HeroSection';
import { ReadyCapsuleSection } from '../components/ReadyCapsuleSection';
import { HERO_SLIDES } from '../constants/hero';

const HomePage: FC = () => (
  <>
    <HeroSection slides={HERO_SLIDES} />
    <FindYoursSection />
    <ReadyCapsuleSection />
  </>
);

export { HomePage };
