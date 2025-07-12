import type { FC } from 'react';

import { GENDERS } from '../../constants/genders';
import type { Gender } from '../../types/Gender';
import { ManBlock } from './gallery/ManBlock';
import { WomanBlock } from './gallery/WomanBlock';

interface GallerySectionProps {
  gender: Gender;
}

const GallerySection: FC<GallerySectionProps> = ({ gender }) => {
  return (
    <section>
      {gender === GENDERS.WOMAN && <WomanBlock />}
      {gender === GENDERS.MAN && <ManBlock />}
    </section>
  );
};

export { GallerySection };
