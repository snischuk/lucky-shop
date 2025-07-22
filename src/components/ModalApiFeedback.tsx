import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import IconClose from '../assets/images/icons/icon-close.svg?react';
import { UiButton } from './ui/UiButton';
import { UiLink } from './ui/UiLink';

interface ModalApiFeedbackProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmButtonText: string;
  onOpenChange: (isOpen: boolean) => void;
  onConfirmButtonClick: () => void;
  redirectPath?: string;
}

const ModalApiFeedback: FC<ModalApiFeedbackProps> = ({
  isOpen,
  title,
  message,
  onOpenChange,
  onConfirmButtonClick,
  redirectPath,
  confirmButtonText = 'OK',
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[1] flex w-full max-w-[944px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[50px] bg-light-black p-10">
          <Dialog.Close asChild>
            <UiButton
              variant="iconOnly"
              icon={<IconClose width={30} />}
              className="absolute right-6 top-6 text-main enabled:hover:text-grey"
            />
          </Dialog.Close>

          <Dialog.Title>
            <VisuallyHidden>{title}</VisuallyHidden>
          </Dialog.Title>

          <Dialog.Description className="mb-2 whitespace-pre-line text-center font-family-primary text-[32px] uppercase leading-loose text-white">
            {message}
          </Dialog.Description>

          {redirectPath ? (
            <UiLink
              to={redirectPath}
              as={Link}
              variant="filled"
              className="w-full max-w-[379px] border border-main bg-transparent px-6 py-5 text-[20px] leading-[1.175] hover:border-orange"
            >
              {confirmButtonText}
            </UiLink>
          ) : (
            <UiButton
              variant="filled"
              onClick={onConfirmButtonClick}
              className="w-full max-w-[379px] border border-main bg-transparent px-6 py-5 text-[20px] leading-[1.175] enabled:hover:border-orange"
            >
              {confirmButtonText}
            </UiButton>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { ModalApiFeedback };
