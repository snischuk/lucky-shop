import { useNavigate } from 'react-router-dom';

import imgBig from '../../../assets/images/man/gallery-big.jpg';
import imgBig2x from '../../../assets/images/man/gallery-big@2x.jpg';
import imgLeft from '../../../assets/images/man/gallery-left.jpg';
import imgLeft2x from '../../../assets/images/man/gallery-left@2x.jpg';
import imgRight from '../../../assets/images/man/gallery-right.jpg';
import imgRight2x from '../../../assets/images/man/gallery-right@2x.jpg';
import { GalleryButton } from './GalleryButton';

const ManBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto grid max-w-custom-1440 grid-cols-2 grid-rows-2 px-[24px] pb-[140px] pt-[70px]">
      <div className="relative col-span-2">
        <img
          src={imgBig}
          srcSet={`${imgBig2x} 2x`}
          alt="Men's clothing"
          className="h-auto w-full object-cover"
        />
        <h2 className="absolute left-[20px] top-[20px] font-family-primary text-[55px] text-orange">
          Літо в стилі Lucky
        </h2>
        <p className="absolute right-[372px] top-[245px] font-family-primary text-body-l uppercase">
          1199 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>

      <div className="relative">
        <img
          src={imgLeft}
          srcSet={`${imgLeft2x} 2x`}
          alt="Men's summer dresses"
        />
        <p className="absolute right-[75px] top-[179px] font-family-primary text-body-l uppercase">
          1450 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>

      <div className="relative">
        <img src={imgRight} srcSet={`${imgRight2x} 2x`} alt="Women's suit" />
        <p className="absolute bottom-[278px] right-[10px] font-family-primary text-body-l uppercase">
          899 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
};

export { ManBlock };
