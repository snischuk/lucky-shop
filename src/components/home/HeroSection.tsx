import Button from '../ui/Button';

const HeroSection = () => (
  <section className="bg-gray-100 py-16 text-center">
    <h1 className="mb-4 text-4xl font-bold">Вітаємо!</h1>
    <p className="mb-6 text-lg">Наша платформа — найкраще місце для початку.</p>
    <Button className="font-body text-2xl">Жіноча колекція</Button>
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      {/* <Button label="ЖІНОЧА КОЛЕКЦІЯ" />
      <Button label="ЧОЛОВІЧА КОЛЕКЦІЯ" /> */}
    </div>
  </section>
);

export { HeroSection };
