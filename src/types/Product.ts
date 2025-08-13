import type { Gender } from './Gender';

export interface Product {
  sku: string;
  name: string;
  brand: string;
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
  hasdiscount: boolean;
  newCollection: boolean;
  topSales: boolean;
  image: string[];
  sizes: { XS: number; S: number; M: number; L: number };
  color: string;
  season: 'spring_summer' | 'autumn_winter';
  description: string;
  material: string;
}
