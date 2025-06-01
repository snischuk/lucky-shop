import ImageHero from '../../assets/images/hero-1.png';
const HeroSection = () => (
  <section className="w-full">
    <div className="relative grid h-[600px] w-full">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-[600px]">
        <img
          className="h-full w-full"
          src={ImageHero}
          alt="Літня колекція 2025"
          height={600}
        />
      </div>

      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full items-end justify-between px-6 py-20">
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

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform gap-2">
        <span className="block h-[10px] w-[60px] rounded-[100px] border border-transparent bg-grey opacity-90 backdrop-blur-[2px]"></span>
        <span className="block h-[10px] w-[60px] rounded-[100px] border border-transparent bg-main opacity-90 backdrop-blur-[2px]"></span>
        <span className="block h-[10px] w-[60px] rounded-[100px] border border-transparent bg-main opacity-90 backdrop-blur-[2px]"></span>
      </div>
    </div>
  </section>
);

export { HeroSection };
