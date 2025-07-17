import type { FC } from 'react';

import man from '../../assets/images/home/ready-capsule/man.jpg';
import man2x from '../../assets/images/home/ready-capsule/man@2x.jpg';
import woman from '../../assets/images/home/ready-capsule/woman.jpg';
import woman2x from '../../assets/images/home/ready-capsule/women@2x.jpg';
import IconDotTag from '../../assets/images/icons/icon-dot-tag.svg?react';
import IconLinePantsFemale from '../../assets/images/icons/icon-line-pants-female.svg?react';
import IconLinePantsMale from '../../assets/images/icons/icon-line-pants-male.svg?react';
import IconLineShirtMale from '../../assets/images/icons/icon-line-shirt-male.svg?react';
import IconLineTopFemale from '../../assets/images/icons/icon-line-top-female.svg?react';
import IconLineTshirtMale from '../../assets/images/icons/icon-line-tshirt-male.svg?react';
import { UiTitle } from '../ui/UiTitle';

const ReadyCapsuleSection: FC = () => {
  return (
    <section className="mx-auto max-w-custom-1440 px-[70] py-[70px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Твоя готова капсула
      </UiTitle>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img src={woman} srcSet={`${woman2x} 2x`} alt="woman" />
          <div className="absolute left-[137px] top-[52px] flex h-8 w-[68px] items-center justify-center border border-light-black px-5 py-2.5 text-light-black">
            Топ
          </div>
          <IconLineTopFemale className="absolute left-[205px] top-[68px] h-[59px] w-[46px]" />
          <IconDotTag className="absolute left-[245px] top-[125px] h-[26px] w-[26px]" />
          <div className="absolute left-[551px] top-[313px] flex h-8 w-[92px] items-center justify-center border border-light-black px-5 py-2.5 text-light-black">
            Штани
          </div>
          <IconLinePantsFemale className="absolute left-[507px] top-[329px] h-[42px] w-[43px]" />
          <IconDotTag className="absolute left-[488px] top-[369px] h-[26px] w-[26px]" />
        </div>
        <div className="relative">
          <img src={man} srcSet={`${man2x} 2x`} alt="man" />
          <div className="absolute left-[406px] top-[72px] flex h-8 w-[117px] items-center justify-center border border-light-black px-5 py-2.5 text-light-black">
            Футболка
          </div>
          <IconLineTshirtMale className="absolute left-[296px] top-[88px] h-[143px] w-[110px]" />
          <IconDotTag className="absolute left-[275px] top-[228px] h-[26px] w-[26px]" />
          <div className="absolute left-[490px] top-[151px] flex h-8 w-[108px] items-center justify-center border border-light-black px-5 py-2.5 text-light-black">
            Сорочка
          </div>
          <IconLineShirtMale className="absolute left-[447px] top-[167px] h-[42px] w-[43px]" />
          <IconDotTag className="absolute left-[426px] top-[206px] h-[26px] w-[26px]" />
          <div className="absolute left-[198px] top-[543px] flex h-8 w-[92px] items-center justify-center border border-light-black px-5 py-2.5 text-light-black">
            Штани
          </div>
          <IconLinePantsMale className="absolute left-[290px] top-[516px] h-[42px] w-[43px]" />
          <IconDotTag className="absolute left-[320px] top-[490px] h-[26px] w-[26px]" />
        </div>
      </div>
    </section>
  );
};

export { ReadyCapsuleSection };
