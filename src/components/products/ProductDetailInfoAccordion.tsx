import * as Accordion from '@radix-ui/react-accordion';
import type { FC } from 'react';

import IconMinus from '../../assets/images/icons/icon-minus.svg?react';
import IconPlus from '../../assets/images/icons/icon-plus.svg?react';

interface ProductDetailInfoAccordionProps {
  sizes: string;
  color: string;
  season: string;
  description: string;
  material: string;
}

const ProductDetailInfoAccordion: FC<ProductDetailInfoAccordionProps> = ({
  sizes,
  color,
  season,
  description,
  material,
}) => {
  return (
    <Accordion.Root
      className="flex-start flex flex-col gap-4 text-[20px] text-black"
      type="single"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Trigger className="group flex w-full justify-between font-family-primary data-[state=open]:font-medium">
          Склад і догляд
          <span className="ml-2">
            <IconPlus className="h-7 w-7 group-data-[state=open]:hidden" />
            <IconMinus className="hidden h-7 w-7 group-data-[state=open]:block" />
          </span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-3 text-[16px]">
          <p className="pt-[17px]">
            Натуральна тканина (льон, бавовна або віскоза)
          </p>
          <p>Прання при макс. темп. 30˚C</p>
          <p>Прасувати при температурі до 110 ˚C</p>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2 mb-[17px]">
        <Accordion.Trigger className="group flex w-full justify-between font-family-primary data-[state=open]:font-medium">
          Опис
          <span className="ml-2">
            <IconPlus className="h-7 w-7 group-data-[state=open]:hidden" />
            <IconMinus className="hidden h-7 w-7 group-data-[state=open]:block" />
          </span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-3 text-[16px]">
          <p className="pt-[17px]">{description}</p>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger className="group flex w-full justify-between font-family-primary data-[state=open]:font-medium">
          Характеристики
          <span className="ml-2">
            <IconPlus className="h-7 w-7 group-data-[state=open]:hidden" />
            <IconMinus className="hidden h-7 w-7 group-data-[state=open]:block" />
          </span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-3 text-[16px]">
          <p className="pt-[17px]">
            Розмір: <span className="text-light-black"></span>
            {sizes}
          </p>
          <p>
            Матеріал товару: <span className="text-light-black"></span>
            {material}
          </p>
          <p>
            Колір: <span className="text-light-black">{color}</span>
          </p>
          <p>
            Сезон: <span className="text-light-black">{season}</span>
          </p>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4">
        <Accordion.Trigger className="group flex w-full justify-between font-family-primary data-[state=open]:font-medium">
          Доставка та повернення
          <span className="ml-2">
            <IconPlus className="h-7 w-7 group-data-[state=open]:hidden" />
            <IconMinus className="hidden h-7 w-7 group-data-[state=open]:block" />
          </span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-3 text-[16px]">
          <p className="pt-[17px]">
            Ми пропонуємо декілька варіантів доставки:
          </p>
          <p className="text-light-black">
            Службами доставки по Україні здійснюємо доставку службами Нова Пошта
            (відділення, поштомат, адресна), Укрпошта, Meest
          </p>
          <p>Обмін та повернення</p>
          <p className="text-light-black">
            Якщо з якоїсь причини вам не підійшла річ, ви можете повернути її чи
            обміняти протягом 14 днів з моменту здійснення покупки, АЛЕ тільки
            за умови, якщо ви нею не користувались і вона зберегла товарний
            вигляд і всі супровідні елементи (пломби, етикетки). В іншому разі
            річ поверненню/обміну НЕ підлягає.
          </p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export { ProductDetailInfoAccordion };
