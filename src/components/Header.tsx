import { useEffect, useRef, useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Logo from '../assets/images/lucky_logo.svg?react';
import Vector from '../assets/images/Vector.svg?react';
import Heart from '../assets/images/Heart.svg?react';
import Profile from '../assets/images/Profile.svg?react';
import SearchImg from '../assets/images/Search.svg?react';
import Bag from '../assets/images/bag.svg?react';
import Close from '../assets/images/Close.svg?react';
import { useToggle } from '../hooks/useToggle';

const Header: FC = () => {
  const { isOpen, open, close } = useToggle();
  const [, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const baseLinkClasses =
    'w-[152px] py-2 border-b-[2px] border-grey transition-all duration-300 flex justify-center hover:border-light-black focus:border-light-black';
  const activeLinkClasses = 'text-black border-light-black font-semibold';

  const setActiveClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(baseLinkClasses, isActive && activeLinkClasses);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        close();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, close]);

  return (
    <header className="relative mx-auto flex w-full max-w-custom-1440 items-center justify-between px-6 font-family-secondary">
      <nav className="flex items-center gap-8 py-4">
        <NavLink to="/">
          <Logo width="223" />
        </NavLink>
        <div className="mx-auto flex w-[42px] justify-center">
          <button
            ref={buttonRef}
            onClick={isOpen ? close : open}
            className="duration-300"
          >
            {isOpen ? <Close /> : <Vector />}
          </button>
        </div>
        {isOpen && (
          <div
            ref={menuRef}
            className={clsx(
              'absolute left-1/2 top-[100px] w-[1442px] -translate-x-1/2 overflow-hidden bg-white py-[100px] transition-all duration-300 ease-in-out',
              isOpen
                ? 'max-h-[400px] translate-y-0 py-[100px] opacity-100'
                : 'pointer-events-none max-h-0 -translate-y-5 py-0 opacity-0',
            )}
          >
            <ul className="flex justify-center gap-2.5 text-h3 uppercase text-light-black">
              <li>
                <NavLink to="/" className="p-5" onClick={close}>
                  Головна
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="p-5" onClick={close}>
                  Про нас
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="p-5" onClick={close}>
                  Знижки
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="p-5" onClick={close}>
                  Оплата та доставка
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex text-2xl uppercase text-grey">
        <NavLink to="/women" className={setActiveClass}>
          Жіноче
        </NavLink>
        <NavLink to="/men" className={setActiveClass}>
          Чоловіче
        </NavLink>
      </div>

      <div className="flex gap-8">
        <SearchImg />
        <NavLink to="/">
          <Heart />
        </NavLink>
        <NavLink to="/">
          <Bag />
        </NavLink>
        <NavLink to="/">
          <Profile />
        </NavLink>
      </div>
    </header>
  );
};

export { Header };
