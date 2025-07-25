import { Link } from 'react-router-dom';

import { UiLink } from '../ui/UiLink';

const EmptyCart = () => {
  return (
    <div className="mx-auto pb-[70px] pt-[140px] text-center">
      <h2 className="mb-[40px] w-[500px] font-family-primary text-[24px] uppercase leading-[1.25] text-black">
        Ваш кошик порожній, але по очах бачимо - ненадовго.
      </h2>
      <UiLink
        as={Link}
        to="/"
        className="mx-auto w-[352px] text-[24px] uppercase"
        variant="filled"
      >
        До каталогу
      </UiLink>
    </div>
  );
};

export { EmptyCart };
