import type { FC } from 'react';
import { Link } from 'react-router-dom';

import img500 from '../../assets/images/error-page/500.png';
import { UiLink } from '../../components/ui/UiLink';
import { PATH_PAGES } from '../../constants/pathPages';

const ServerErrorPage: FC = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center pb-[140px] pt-20">
      <div className="grid h-[650px] grid-rows-[148px_100px_402px]">
        <h1 className="font-family-primary text-[200px] font-medium leading-[1.24]">
          500
        </h1>

        <div className="grid items-center justify-items-center">
          <img
            width={394}
            src={img500}
            alt="Кофта на вішаку"
            className="col-start-1 col-end-2 row-start-1 row-end-2"
          />

          <span className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[212px] -translate-y-[32px] text-center font-family-secondary text-[16px] font-medium leading-[1.18] text-white">
            <span className="inline-block">Сервер плаче в кутку.</span>
            <span className="inline-block">Але ми вже заспокоюємо.</span>
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

export { ServerErrorPage };
