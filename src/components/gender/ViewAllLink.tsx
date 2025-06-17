import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface ViewAllLinkProps {
  link: string;
}

const ViewAllLink: FC<ViewAllLinkProps> = ({ link }) => {
  return (
    <Link
      to={link}
      className="border border-light-black px-9 py-3 text-[24px] font-medium uppercase leading-[normal] transition-all duration-default hover:border-orange hover:text-orange"
    >
      Переглянути все
    </Link>
  );
};

export { ViewAllLink };
