import { useNavigate } from 'react-router-dom';

import imgBig from '../../../assets/images/woman/gallery-big.jpg';
import imgBig2x from '../../../assets/images/woman/gallery-big@2x.jpg';
import imgLeft from '../../../assets/images/woman/gallery-left.jpg';
import imgLeft2x from '../../../assets/images/woman/gallery-left@2x.jpg';
import imgRight from '../../../assets/images/woman/gallery-right.jpg';
import imgRight2x from '../../../assets/images/woman/gallery-right@2x.jpg';
import { GalleryButton } from './GalleryButton';

const WomanBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto grid max-w-custom-1440 grid-cols-2 grid-rows-2 px-[24px] pb-[140px] pt-[70px]">
      <div className="relative col-span-2">
        <img
          src={imgBig}
          srcSet={`${imgBig2x} 2x`}
          alt="Women's clothing"
          className="h-auto w-full object-cover"
        />
        <h2 className="absolute left-[20px] top-[20px] font-family-primary text-[55px] text-orange">
          Літо в стилі Lucky
        </h2>
        <p className="absolute bottom-[220px] right-[461px] font-family-primary text-body-l uppercase">
          899 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>

      <div className="relative">
        <img src={imgLeft} srcSet={`${imgLeft2x} 2x`} alt="Women's dresses" />
        <p className="absolute left-[57px] top-[295px] font-family-primary text-body-l uppercase">
          1199 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>

      <div className="relative">
        <img src={imgRight} srcSet={`${imgRight2x} 2x`} alt="Women's suit" />
        <p className="absolute left-[117px] top-[198px] font-family-primary text-body-l uppercase">
          1450 грн
        </p>
        <div className="absolute bottom-[24px] right-[24px]">
          <GalleryButton onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
};

export { WomanBlock };
