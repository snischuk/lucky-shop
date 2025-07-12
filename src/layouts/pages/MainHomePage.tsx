import type { FC } from 'react';

import { FindYoursSection } from '../components/home/FindYoursSection';
import { HomeHeroSection } from '../components/home/HomeHeroSection';
import { ReadyCapsuleSection } from '../components/home/ReadyCapsuleSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { HOME_HERO_SLIDES } from '../constants/homeHeroSlides';

const MainHomePage: FC = () => (
  <>
    <HomeHeroSection slides={HOME_HERO_SLIDES} />
    <FindYoursSection />
    <ReadyCapsuleSection />
    <ReviewsSection />
  </>
);

export { MainHomePage };
