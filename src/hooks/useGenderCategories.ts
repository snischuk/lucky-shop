import { mockProducts } from '../data/mockProducts';
import { useValidatedGender } from './useValidatedGender';

export const useGenderCategories = (): {
  gender: 'men' | 'women' | null;
  categories: string[];
} => {
  const gender = useValidatedGender();

  if (!gender) {
    return { gender: null, categories: [] };
  }

  const categories = Array.from(
    new Set(
      mockProducts
        .filter((product) => product.gender === gender)
        .map((product) => product.category),
    ),
  );

  return { gender, categories };
};
