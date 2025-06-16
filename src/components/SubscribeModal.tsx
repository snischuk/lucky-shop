import * as Dialog from '@radix-ui/react-dialog';
import type { FC } from 'react';

import IconClose from '../assets/images/icons/icon-close.svg?react';

interface SubscribeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isError: boolean;
  message: string;
  onConfirm: () => void;
}

export const SubscribeModal: FC<SubscribeModalProps> = ({
  open,
  onOpenChange,
  isError,
  message,
  onConfirm,
}) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 p-2" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[1] flex w-full max-w-[944px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[50px] bg-light-black p-10">
        <Dialog.Close asChild>
          <button
            aria-label="Закрити"
            className="absolute right-6 top-6 text-main transition-colors duration-default hover:text-light-grey"
          >
            <IconClose width={30} />
          </button>
        </Dialog.Close>

        <Dialog.Description className="mb-2 whitespace-pre-line text-center font-family-primary text-[32px] uppercase leading-loose text-white">
          {isError
            ? message
            : `Дякуємо!
               Ви успішно оформили підписку.`}
        </Dialog.Description>

        <button
          onClick={onConfirm}
          className="w-full max-w-[379px] border border-main px-6 py-5 text-center font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange"
        >
          На головну
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
