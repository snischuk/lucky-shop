import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';

interface UseModalSubscribeReturn {
  isModalOpen: boolean;
  modalMessage: string;
  isError: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  openModal: (message: string, isError?: boolean) => void;
  closeModal: () => void;
  closeModalAndRedirect: () => void;
}

const useModalSubscribe = (): UseModalSubscribeReturn => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const openModal = (message: string, isError = false): void => {
    setModalMessage(message);
    setIsError(isError);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const closeModalAndRedirect = (): void => {
    closeModal();
    navigate(PATH_PAGES.MAIN);
  };

  return {
    isModalOpen,
    modalMessage,
    isError,
    setIsModalOpen,
    openModal,
    closeModal,
    closeModalAndRedirect,
  };
};

export { useModalSubscribe };
