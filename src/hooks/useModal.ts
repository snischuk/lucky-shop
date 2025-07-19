import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseModalReturn {
  isModalOpen: boolean;
  modalMessage: string;
  isError: boolean;
  modalConfirmButtonText: string;
  openModal: (
    message: string,
    isError?: boolean,
    redirectPath?: string,
    buttonText?: string,
  ) => void;
  closeModal: () => void;
  confirmModal: () => void;
}

const useModal = (): UseModalReturn => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [modalRedirectPath, setModalRedirectPath] = useState<string>();
  const [modalConfirmButtonText, setModalConfirmButtonText] = useState('OK');

  const openModal = (
    message: string,
    isError = false,
    redirectPath?: string,
    buttonText = 'OK',
  ): void => {
    setModalMessage(message);
    setIsError(isError);
    setModalRedirectPath(redirectPath);
    setModalConfirmButtonText(buttonText);
    setIsModalOpen(true);
  };

  const closeModal = (): void => setIsModalOpen(false);

  const confirmModal = (): void => {
    closeModal();
    if (modalRedirectPath) navigate(modalRedirectPath);
  };

  return {
    isModalOpen,
    modalMessage,
    isError,
    modalConfirmButtonText,
    openModal,
    closeModal,
    confirmModal,
  };
};

export { useModal };
