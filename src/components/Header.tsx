import { useEffect, useRef, useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CiSearch, CiHeart, CiUser } from 'react-icons/ci';
import { PiBagLight } from 'react-icons/pi';
import logo from '../assets/images/lucky_logo.png';
import { CiMenuBurger } from 'react-icons/ci';
import { useToggle } from '../hooks/useToggle';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';

const Header: FC = () => {
  const { isOpen, open, close } = useToggle();
  const [, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const baseLinkClasses = 'w-[152px] py-2 flex justify-center';
  const activeLinkClasses =
    'text-black border-b border-[#1E1E1E] font-semibold';

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
    <header className="relative flex items-center justify-between px-6">
      <nav className="flex items-center gap-8 py-4">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" width="223" />
        </NavLink>
        <div>
          <button ref={buttonRef} onClick={isOpen ? close : open}>
            {isOpen ? (
              <IoCloseOutline size="30px" />
            ) : (
              <CiMenuBurger size="30px" />
            )}
          </button>
        </div>
        {isOpen && (
          <div
            ref={menuRef}
            className={clsx(
              'absolute left-1/2 top-[100px] w-[1440px] -translate-x-1/2 overflow-hidden bg-white py-[100px] transition-[max-height,opacity,transform] duration-500 ease-in-out',
              isOpen
                ? 'max-h-[400px] translate-y-0 opacity-100'
                : 'pointer-events-none max-h-0 -translate-y-5 opacity-0',
            )}
          >
            <ul className="flex justify-center gap-2.5 text-[32px] uppercase text-[#1E1E1E]">
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

      <div className="flex border-b border-solid border-b-[#7A7A7A] text-2xl uppercase text-[#7A7A7A]">
        <NavLink to="/women" className={setActiveClass}>
          Жіноче
        </NavLink>
        <NavLink to="/men" className={setActiveClass}>
          Чоловіче
        </NavLink>
      </div>

      <div className="flex gap-8">
        <CiSearch size={30} />
        <NavLink to="/">
          <CiHeart size={30} />
        </NavLink>
        <NavLink to="/">
          <PiBagLight size={30} />
        </NavLink>
        <NavLink to="/">
          <CiUser size="30px" />
        </NavLink>
      </div>
    </header>
  );
};

export { Header };
