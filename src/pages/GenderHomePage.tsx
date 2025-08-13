import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { NewCollectionSection } from '../components/gender/NewCollectionSection';
import { SalesSection } from '../components/gender/SalesSection';
import { TopSalesSection } from '../components/gender/TopSalesSection';
import { PATH_PAGES } from '../constants/pathPages';
import { useGenderCategories } from '../hooks/useGenderCategories';

const GenderHomePage: FC = () => {
  const { gender } = useGenderCategories();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

  return (
    <>
      <NewCollectionSection gender={gender} />
      <TopSalesSection gender={gender} />
      <SalesSection gender={gender} />
    </>
  );
};

export { GenderHomePage };
