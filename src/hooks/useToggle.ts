import { useState } from 'react';

interface UseToggleReturnType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useToggle = (): UseToggleReturnType => {
  const [isOpen, setIsOpen] = useState(false);

  const open = (): void => setIsOpen(true);
  const close = (): void => setIsOpen(false);

  return { isOpen, open, close };
};

export { useToggle };
