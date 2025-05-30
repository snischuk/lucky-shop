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
  const [scrolled, setScrolled] = useState(false);
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
    <header className="flex px-6 items-center justify-between relative">
      <nav className="flex gap-8 items-center py-4">
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
              'absolute top-[100px] left-1/2 -translate-x-1/2 bg-white w-[1440px] py-[100px] transition-[max-height,opacity,transform] duration-500 ease-in-out overflow-hidden',
              isOpen
                ? 'max-h-[400px] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-5 pointer-events-none',
            )}
          >
            <ul className="flex gap-2.5 uppercase justify-center text-[32px] text-[#1E1E1E]">
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

      <div className="flex uppercase text-[#7A7A7A] text-2xl border-b-[#7A7A7A] border-b border-solid">
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
