import type { FC } from 'react';
import IconInstagram from '../../assets/images/icons/instagram.svg?react';

const ContactsSection: FC = () => (
  <section className="h-1 bg-white px-4 py-12">
    <h2 className="mb-4 text-2xl font-semibold">Наші переваги</h2>
    <ul className="list-disc space-y-2 pl-6">
      <li className="bg-red-400">Швидкий запуск</li>
      <li className="font-body">Зрозумілий інтерфейс</li>
      <li className="font-heading">
        Гнучка архітектура
        <IconInstagram className="h-6 w-6 stroke-red-500" />
        <IconInstagram className="h-6 w-6 fill-red-500" />
        <IconInstagram className="bg-yellow-400 text-blue-500" />
      </li>
    </ul>
  </section>
);

export default ContactsSection;
