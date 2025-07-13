import type { FC } from 'react';
import { Link } from 'react-router-dom';

import img404 from '../../assets/images/error-page/404.png';
import { UiLink } from '../../components/ui/UiLink';
import { PATH_PAGES } from '../../constants/pathPages';

const NotFoundPage: FC = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center pb-[140px] pt-20">
      <div className="grid h-[643px] grid-rows-[157px_91px_395px]">
        <h1 className="font-family-primary text-[200px] font-medium leading-[1.24]">
          404
        </h1>

        <div className="grid items-center justify-items-center">
          <img
            width={400}
            src={img404}
            alt="Футболка на вішаку"
            className="col-start-1 col-end-2 row-start-1 row-end-2"
          />

          <span className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[162px] -translate-y-[46px] text-center font-family-secondary text-[16px] font-medium leading-[1.18] text-white">
            Упс, розробники вже біжать!
          </span>
        </div>
      </div>

      <UiLink
        className="mt-[34px] text-[24px] uppercase leading-[1.175]"
        as={Link}
        to={PATH_PAGES.MAIN}
        variant="filled"
      >
        Повернутися на головну сторінку
      </UiLink>
    </div>
  );
};

export { NotFoundPage };
