import { type FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import IconDown from '../../assets/images/icons/icon-arrow-down.svg?react';
import { CATEGORY_MAP } from '../../constants/categoryMap';
import { GENDERS_UA } from '../../constants/genders';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
import { setFilter } from '../../redux/filters/slice';
// import type { ProductsFilters as ProductsFiltersType } from '../../types/ProductsFilters';
import { fetchProducts } from '../../redux/products/operations';

type Filter = 'price' | 'size' | 'color' | 'season' | 'sort' | null;

const ProductsFilters: FC = () => {
  const dispatch = useTypedDispatch();
  const filters = useTypedSelector((state) => state.filters);
  const [openFilter, setOpenFilter] = useState<Filter>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const { gender, category } = useParams<{
    gender: string;
    category?: string;
  }>();

  const typedGender = gender as keyof typeof CATEGORY_MAP;
  const typedCategory =
    category as keyof (typeof CATEGORY_MAP)[typeof typedGender];

  const toggleFilter = (filter: Filter) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  };

  const handleFilterChange = (
    key: keyof typeof filters,
    value: string | number,
  ) => {
    dispatch(setFilter({ key, value }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (gender) {
      dispatch(fetchProducts({ filters: { ...filters, gender, category } }));
    }
  }, [dispatch, filters, gender, category]);

  return (
    <section
      ref={filtersRef}
      className="mx-auto w-full max-w-custom-1440 font-family-secondary"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex w-[393px] gap-4">
          <p className="text-h4 font-medium uppercase">
            {GENDERS_UA[gender as keyof typeof GENDERS_UA]}:
          </p>
          {gender && category && (
            <p className="text-h4 uppercase">
              {CATEGORY_MAP[typedGender]?.[typedCategory]?.title || category}
            </p>
          )}
        </div>

        <ul className="flex gap-20 text-[18px]">
          <li
            onClick={() => toggleFilter('price')}
            className="relative flex cursor-pointer items-center gap-4"
          >
            <p>Ціна</p>
            <IconDown
              width={16}
              className={`transition-transform duration-300 ${
                openFilter === 'price' ? 'rotate-180' : ''
              }`}
            />
            {openFilter === 'price' && (
              <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white p-3 shadow-md">
                <input
                  type="number"
                  placeholder="від"
                  onChange={(e) =>
                    handleFilterChange('price_from', Number(e.target.value))
                  }
                />
                <input
                  type="number"
                  placeholder="до"
                  onChange={(e) =>
                    handleFilterChange('price_to', Number(e.target.value))
                  }
                />
              </div>
            )}
          </li>
          <li
            onClick={() => toggleFilter('size')}
            className="relative flex cursor-pointer gap-4"
          >
            <p>Розмір</p>
            <IconDown
              width={16}
              className={`transition-transform duration-300 ${
                openFilter === 'size' ? 'rotate-180' : ''
              }`}
            />
            {openFilter === 'size' && (
              <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white p-3 shadow-md">
                <p>Фільтри за розміром...</p>
              </div>
            )}
          </li>
          <li
            onClick={() => toggleFilter('color')}
            className="relative flex cursor-pointer gap-4"
          >
            <p>Колір</p>
            <IconDown
              width={16}
              className={`transition-transform duration-300 ${
                openFilter === 'color' ? 'rotate-180' : ''
              }`}
            />
            {openFilter === 'color' && (
              <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white p-3 shadow-md">
                <p>Фільтри за кольором...</p>
              </div>
            )}
          </li>
          <li
            onClick={() => toggleFilter('season')}
            className="relative flex cursor-pointer gap-4"
          >
            <p>Сезон</p>
            <IconDown
              width={16}
              className={`transition-transform duration-300 ${
                openFilter === 'season' ? 'rotate-180' : ''
              }`}
            />
            {openFilter === 'season' && (
              <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white p-3 shadow-md">
                <p>Фільтри за сезоном...</p>
              </div>
            )}
          </li>
        </ul>

        <div className="flex w-[416px] items-center justify-end gap-4 text-[18px]">
          <p onClick={() => toggleFilter('sort')}>Сортувати: Новинки</p>
          <IconDown
            width={16}
            className={`transition-transform duration-300 ${
              openFilter === 'sort' ? 'rotate-180' : ''
            }`}
          />
          {openFilter === 'sort' && (
            <div className="absolute left-0 top-full mt-2 w-40 rounded-lg bg-white p-3 shadow-md">
              <p>Сортування...</p>
            </div>
          )}
        </div>
      </div>

      <div>{/* вивід обраних фільтрів з хрестиком */}</div>
    </section>
  );
};

export { ProductsFilters };
