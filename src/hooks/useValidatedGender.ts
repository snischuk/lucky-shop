import { useParams } from 'react-router-dom';

import type { PATH_PAGES, PathParams } from '../constants/pathPages';
import { validateGenderParam } from '../helpers/validateGenderParam';
import type { Gender } from '../types/Gender';

const useValidatedGender = (): Gender | null => {
  const { gender } = useParams<PathParams[typeof PATH_PAGES.GENDER_PRODUCTS]>();
  return validateGenderParam(gender) ? gender : null;
};

export { useValidatedGender };
