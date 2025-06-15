import type { FC } from 'react';

type PopupProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Popup: FC<PopupProps> = ({ message, type, onClose }) => {
  const color = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      className={`fixed left-1/2 top-8 z-50 -translate-x-1/2 rounded-xl px-6 py-4 text-white shadow-xl ${color}`}
    >
      <div className="flex items-center gap-4">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="text-xl leading-none text-white hover:opacity-80"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export { Popup };
