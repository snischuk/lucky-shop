import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { fetchProduct } from '../redux/products/operations';
import { selectProducts } from '../redux/products/selectors';
import { useTypedDispatch } from './useRedux';
import { useValidatedGender } from './useValidatedGender';

const useGenderCategories = (): {
  gender: 'man' | 'woman' | null;
  categories: string[];
} => {
  const gender = useValidatedGender();
  const dispatch = useTypedDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (gender) {
      dispatch(fetchProduct());
    }
  }, [gender, dispatch]);

  const categories = useMemo(() => {
    if (!gender || !products.length) return [];
    return Array.from(
      new Set(
        products
          .filter((product) => product.gender === gender)
          .map((product) => product.category),
      ),
    );
  }, [gender, products]);

  return { gender, categories };
};

export { useGenderCategories };
