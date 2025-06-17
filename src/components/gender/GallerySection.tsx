import type { FC } from 'react';

import type { Gender } from '../../types/Gender';
import { ManBlock } from './gallery/ManBlock';
import { WomanBlock } from './gallery/WomanBlock';

interface GallerySectionProps {
  gender: Gender;
}

const GallerySection: FC<GallerySectionProps> = ({ gender }) => {
  return (
    <section>
      {gender === 'women' && <WomanBlock />}
      {gender === 'men' && <ManBlock />}
    </section>
  );
};

export { GallerySection };
