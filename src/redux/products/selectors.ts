import { createSelector } from '@reduxjs/toolkit';

import type { Gender } from '../../types/Gender';
import type { Product } from '../../types/Product';
import type { RootState } from '../store';

export const selectProducts = (state: RootState): Product[] =>
  state.products.items;

export const selectProductBySku = (state: RootState): Product | null =>
  state.products.productBySku;

export const selectProductByCategory = (state: RootState): Product | null =>
  state.products.productByCategory;

export const selectNewCollectionByGender = (gender?: Gender) =>
  createSelector([selectProducts], (products) =>
    products.filter(
      (product) => product.gender === gender && product.newCollection,
    ),
  );

export const selectTopSallesByGender = (gender?: Gender) =>
  createSelector([selectProducts], (products) =>
    products.filter((product) => product.gender === gender && product.topSales),
  );

export const selectHasDiscountByGender = (gender?: Gender) =>
  createSelector([selectProducts], (products) =>
    products.filter(
      (product) => product.gender === gender && product.hasdiscount,
    ),
  );
