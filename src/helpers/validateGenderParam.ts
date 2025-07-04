import type { Gender } from '../types/Gender';

const allowedGenders: Gender[] = ['man', 'woman'];
export const validateGenderParam = (gender: unknown): gender is Gender => {
  return (
    typeof gender === 'string' && allowedGenders.includes(gender as Gender)
  );
};
