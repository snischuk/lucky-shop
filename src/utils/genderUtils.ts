export const allowedGenders = ['man', 'woman'] as const;
export type Gender = (typeof allowedGenders)[number];

export const isValidGender = (gender: unknown): gender is Gender => {
  return (
    typeof gender === 'string' && allowedGenders.includes(gender as Gender)
  );
};
