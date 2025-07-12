import 'swiper/css';
import 'swiper/css/pagination';

import { type FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { href } from 'react-router-dom';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GENDERS } from '../../constants/genders';
import { PATH_PAGES } from '../../constants/pathPages';
import { useTypedDispatch } from '../../hooks/useRedux';
import { fetchProduct } from '../../redux/products/operations';
import { selectProducts } from '../../redux/products/selectors';
import type { Gender } from '../../types/Gender';
import { ProductCard } from '../products/ProductCard';
import { SlideNextButton } from '../ui/SlideNextButton';
import { SlidePrevButton } from '../ui/SlidePrevButton';
import { UiTitle } from '../ui/UiTitle';
import { ViewAllLink } from './ViewAllLink';

interface SalesSectionProps {
  gender: Gender;
}

const SalesSection: FC<SalesSectionProps> = ({ gender }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const products = useSelector(selectProducts);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const filteredProducts = products.filter(
    (product) => product.gender === gender && product.hasdiscount,
  );

  return (
    <div className="relative z-[0] mx-auto w-full max-w-custom-1440 px-6 py-[70px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Розпродаж
      </UiTitle>

      <div className="absolute right-4 top-[96px] mb-20 flex justify-end">
        <SlidePrevButton swiperRef={swiperRef} disabled={isBeginning} />
        <SlideNextButton swiperRef={swiperRef} disabled={isEnd} />
      </div>
      {filteredProducts.length > 0 && (
        <Swiper
          modules={[Pagination, Keyboard, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          keyboard={{ enabled: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

            swiper.on('slideChange', () => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
          }}
          className="mb-[32px] h-[744px]"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide
              key={product.sku}
              className="flex flex-row items-center justify-center"
            >
              <ProductCard item={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="flex justify-center">
        {gender === GENDERS.WOMAN && (
          <ViewAllLink
            link={href(PATH_PAGES.GENDER_SALE, { gender: GENDERS.WOMAN })}
          />
        )}
        {gender === GENDERS.MAN && (
          <ViewAllLink
            link={href(PATH_PAGES.GENDER_SALE, { gender: GENDERS.MAN })}
          />
        )}
      </div>
    </div>
  );
};

export { SalesSection };
