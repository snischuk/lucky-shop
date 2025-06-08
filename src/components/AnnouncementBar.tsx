import type { FC } from 'react';

import Close from '../assets/images/Close_white.svg?react';
import Delivery from '../assets/images/Delivery.svg?react';

type Props = {
  onClose: () => void;
};

const AnnouncementBar: FC<Props> = ({ onClose }) => {
  return (
    <div className="bg-black p-2 text-main">
      <div className="relative mx-auto flex w-full max-w-custom-1440 items-center justify-center gap-4 font-family-secondary">
        <Delivery /> Безкоштовна доставка від 1000 грн.
        <button onClick={onClose} className="absolute right-6">
          <Close width={16} />
        </button>
      </div>
    </div>
  );
};

export { AnnouncementBar };
