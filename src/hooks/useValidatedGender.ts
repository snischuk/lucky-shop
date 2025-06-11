import { useParams } from 'react-router-dom';

import type { Gender } from '../utils/genderUtils';
import { isValidGender } from '../utils/genderUtils';

export const useValidatedGender = (): Gender | null => {
  const { gender } = useParams<{ gender?: string }>();
  return isValidGender(gender) ? gender : null;
};
