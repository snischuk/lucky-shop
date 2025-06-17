import { useRef } from 'react';

import { testimonialsData } from '../utils/testimonailsData';
import { CustomRefEnum } from './SvgIcons/IconRef';
import SvgIcons from './SvgIcons/SvgIcons';
import TestimonialsCard from './TestimonialsCard';

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300; // Adjust scroll distance per click

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const renderTestimonialsData = (item: any, index: number) => {
    return <TestimonialsCard {...item} key={index} />;
  };

  return (
    <div className="py-[100px]">
      <div className="flex justify-center">
        <h1 className="text-center text-5xl font-semibold">
          Наші клієнти говорять
        </h1>
      </div>
      <div className="flex justify-end pb-12 pr-8">
        <button onClick={scrollLeft}>
          <SvgIcons
            name={CustomRefEnum.ArrowLeft}
            baseClassname="w-10 text-[#B6B6B6]"
          />
        </button>
        <button className="ml-4" onClick={scrollRight}>
          <SvgIcons
            name={CustomRefEnum.ArrowRight}
            baseClassname="w-10 text-[#1E1E1E]"
          />
        </button>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="custom-scrollbar-hide flex overflow-x-scroll p-8"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[100px] bg-white/50 backdrop-blur-sm"></div>
          {testimonialsData.map(renderTestimonialsData)}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
