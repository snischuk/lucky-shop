import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OpenModalParams {
  title: string;
  message: string;
  buttonText: string;
  redirectPath?: string;
}

interface UseModalReturn {
  isModalOpen: boolean;
  title: string;
  modalMessage: string;
  modalConfirmButtonText: string;
  openModal: (params: OpenModalParams) => void;
  closeModal: () => void;
  closeAndRedirectModal: () => void;
  modalRedirectPath?: string;
}

const useModal = (): UseModalReturn => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalConfirmButtonText, setModalConfirmButtonText] = useState('OK');
  const [modalRedirectPath, setModalRedirectPath] = useState<string>();

  const openModal = ({
    title,
    message,
    redirectPath,
    buttonText = 'OK',
  }: OpenModalParams): void => {
    setIsModalOpen(true);
    setTitle(title);
    setModalMessage(message);
    setModalConfirmButtonText(buttonText);
    setModalRedirectPath(redirectPath);
  };

  const closeModal = (): void => setIsModalOpen(false);

  const closeAndRedirectModal = (): void => {
    closeModal();
    if (modalRedirectPath) {
      navigate(modalRedirectPath);
    }
  };

  return {
    isModalOpen,
    title,
    modalMessage,
    modalConfirmButtonText,
    openModal,
    closeModal,
    closeAndRedirectModal,
    modalRedirectPath,
  };
};

export { useModal };
