import type { FC } from 'react';

import IconDelivery from '../assets/images/icons/delivery.svg?react';
import IconClose from '../assets/images/icons/icon-close-white.svg?react';

interface AnnouncementBarProps {
  onClose: () => void;
}

const AnnouncementBar: FC<AnnouncementBarProps> = ({ onClose }) => {
  return (
    <div className="bg-black p-2 text-main">
      <div className="relative mx-auto flex w-full max-w-custom-1440 items-center justify-center gap-4 font-family-secondary">
        <IconDelivery /> Безкоштовна доставка від 1000 грн.
        <button onClick={onClose} className="absolute right-6">
          <IconClose width={16} />
        </button>
      </div>
    </div>
  );
};

export { AnnouncementBar };
