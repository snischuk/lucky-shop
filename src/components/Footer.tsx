import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import IconFacebook from '../assets/images/icons/icon-facebook.svg?react';
import IconInstagram from '../assets/images/icons/icon-instagram.svg?react';
import IconYoutube from '../assets/images/icons/icon-youtube.svg?react';
import Logo from '../assets/images/logo-lucky.svg?react';
import { PATH_PAGES } from '../constants/pathPages';
import type { FooterNavigationLink } from '../types/FooterNavigationLink';
import { UiLink } from './ui/UiLink';

interface FooterProps {
  navigationLinks: FooterNavigationLink[];
}

const Footer: FC<FooterProps> = ({ navigationLinks }) => (
  <footer className="bg-main pb-6 pt-20">
    <div className="mx-auto max-w-custom-1440 px-6">
      <div className="flex flex-wrap items-start justify-between gap-7">
        <div className="flex flex-col gap-4">
          <UiLink
            as={NavLink}
            to={PATH_PAGES.MAIN}
            variant="iconOnly"
            icon={<Logo width={278} />}
          />

          <ul className="mt-4 flex gap-6">
            <li>
              <UiLink
                as="a"
                variant="iconOnly"
                icon={<IconFacebook width={28} />}
                href="https://www.facebook.com/"
              />
            </li>
            <li>
              <UiLink
                as="a"
                variant="iconOnly"
                icon={<IconInstagram width={28} />}
                href="https://www.instagram.com/"
              />
            </li>
            <li>
              <UiLink
                as="a"
                variant="iconOnly"
                icon={<IconYoutube width={28} />}
                href="https://www.youtube.com/"
              />
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
                <UiLink as={NavLink} to={to} variant="default">
                  {label}
                </UiLink>
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
            <UiLink as={Link} to={PATH_PAGES.TERMS_OF_SERVICE}>
              Terms of Service
            </UiLink>
          </li>
          <li>
            <UiLink as={Link} to={PATH_PAGES.PRIVACY_POLICY}>
              Privacy Policy
            </UiLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export { Footer };
