import Delivery from '../assets/images/Delivery.svg?react';

const AnnouncementBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-black p-2 text-[#F9F9F9]">
      <Delivery /> Безкоштовна доставка від 1000 грн.
    </div>
  );
};

export default AnnouncementBar;
