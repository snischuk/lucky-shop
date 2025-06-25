import clsx from 'clsx';
import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import IconFacebook from '../assets/images/icons/icon-facebook.svg?react';
import IconInstagram from '../assets/images/icons/icon-instagram.svg?react';
import IconYoutube from '../assets/images/icons/icon-youtube.svg?react';
import Logo from '../assets/images/logo-lucky.svg?react';
import type { NavigationLink } from '../types/NavigationLink';

interface FooterProps {
  navigationLinks: NavigationLink[];
}

const Footer: FC<FooterProps> = ({ navigationLinks }) => (
  <footer className="bg-main pb-6 pt-20">
    <div className="mx-auto max-w-custom-1440 px-6">
      <div className="flex flex-wrap items-start justify-between gap-7">
        <div className="flex flex-col gap-4">
          <Link to="/">
            <Logo width={278} />
          </Link>

          <ul className="mt-4 flex gap-6">
            <li>
              <a
                className="text-grey transition-colors duration-default hover:text-light-grey"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook width={28} />
              </a>
            </li>
            <li>
              <a
                className="text-grey transition-colors duration-default hover:text-light-grey"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram width={28} />
              </a>
            </li>
            <li>
              <a
                className="text-grey transition-colors duration-default hover:text-light-grey"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconYoutube width={28} />
              </a>
            </li>
          </ul>
        </div>

        <span className="mt-4 max-w-[470px] text-center font-family-primary text-[28px] text-orange">
          Одяг, що змінює настрій. Стиль, що творить момент
        </span>

        <a
          className="w-[190px] border border-grey px-6 py-4 text-center font-family-secondary text-light-black transition-colors duration-default hover:border-orange hover:text-orange"
          href="mailto:info@lucky.ua"
        >
          info@lucky.ua
        </a>
      </div>

      <div className="mt-[98px] flex flex-wrap items-center justify-between gap-7 py-7 font-family-secondary text-body-xs text-light-black">
        <nav>
          <ul className="flex flex-wrap gap-x-10 gap-y-4 whitespace-nowrap">
            {navigationLinks.map(({ id, to, label }) => (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'transition-colors duration-default hover:text-black',
                      {
                        'text-orange': isActive,
                      },
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <address className="whitespace-nowrap not-italic">
          Київ, вул Богатирська 45
        </address>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-grey pt-7 font-family-secondary text-body-xs text-light-black">
        <span>&copy;2025 Lucky</span>

        <ul className="flex justify-end gap-5">
          <li>
            <Link
              to="/terms-of-service"
              className="transition-colors duration-default hover:text-black"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-default hover:text-black"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export { Footer };
