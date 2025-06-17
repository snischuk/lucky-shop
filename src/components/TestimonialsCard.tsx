import { CustomRefEnum } from './SvgIcons/IconRef';
import SvgIcons from './SvgIcons/SvgIcons';

interface Props {
  rating: number;
  clientname: string;
  description: string;
}

function TestimonialsCard(props: Props) {
  const { rating, clientname, description } = props;
  return (
    <div className="mx-[20px] flex w-[400px] min-w-[400px] flex-col border-[1px] border-[#0000001A] px-8 pb-20 pt-8">
      <div className="flex">
        {Array.from({ length: rating }, () => {
          return (
            <SvgIcons
              name={CustomRefEnum.Star}
              baseClassname="w-7 h-8 text-[#F6F3B9]"
            />
          );
        })}
      </div>
      <div className="flex py-4">
        <h2 className="mr-1 text-xl text-[#1E1E1E]">{clientname}</h2>
        <SvgIcons
          name={CustomRefEnum.CircleTick}
          baseClassname="w-5 text-[#1FA800]"
        />
      </div>
      <p className="text-[#7A7A7A]">{description}</p>
    </div>
  );
}

export default TestimonialsCard;
