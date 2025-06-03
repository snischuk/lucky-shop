import { HeroSection } from '../components/home/HeroSection';
import { HERO_SLIDES } from '../constants/hero';

const HomePage = () => (
  <>
    <HeroSection slides={HERO_SLIDES} />
  </>
);

export { HomePage };
