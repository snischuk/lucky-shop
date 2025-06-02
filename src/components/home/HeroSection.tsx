import ImageHero from '../../assets/images/hero-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HeroSection = () => (
  <Swiper
    className="hero-swiper relative w-full"
    modules={[Pagination, A11y, Autoplay]}
    autoplay={{ delay: 6000 }}
    slidesPerView={1}
    pagination={{
      clickable: true,
    }}
  >
    {[...Array(3)].map((_, i) => (
      <SwiperSlide key={i}>
        <div className="grid h-[600px] w-full">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-[600px]">
            <img
              className="h-full w-full object-cover"
              src={ImageHero}
              alt="Літня колекція 2025"
              height={600}
            />
          </div>

          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full items-end justify-between gap-10 px-6 py-20">
            <div className="bg-red-950">
              <span className="block text-nowrap font-family-primary text-4xl text-black">
                Літня колекція
              </span>
              <span className="block font-family-primary text-8xl text-black">
                2025
              </span>
            </div>

            <div className="bg-red-500 mr-24 flex flex-col gap-4">
              <button className="w-[330px] border border-solid border-light-black bg-transparent px-6 py-5 font-family-secondary font-medium uppercase leading-none text-light-black">
                Жіноча колекція
              </button>
              <button className="w-[330px] border border-solid border-light-black bg-transparent px-6 py-5 font-family-secondary font-medium uppercase leading-none text-light-black">
                Чоловіча колекція
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export { HeroSection };
