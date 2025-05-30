import { TbTruckDelivery } from 'react-icons/tb';

const AnnouncementBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-black p-2 text-[#F9F9F9]">
      <TbTruckDelivery size="24px" /> Безкоштовна доставка від 1000 грн.
    </div>
  );
};

export default AnnouncementBar;
