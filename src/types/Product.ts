import type { Gender } from './Gender';

export interface Product {
  id: string;
  sku: string;
  name: string;
  gender: Gender;
  category:
    | 'dresses'
    | 'shirts'
    | 'summer'
    | 'pants'
    | 'outerwear'
    | 'sweatshirts';
  price: number;
  oldPrice: number | null;
  hasDiscount: boolean;
  image: string;
  sizes: string[];
  color: string;
  season: 'spring_summer' | 'autumn_winter';
  description: string;
  material: string;
}
