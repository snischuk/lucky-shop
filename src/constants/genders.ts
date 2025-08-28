export const GENDERS = {
  WOMAN: 'woman',
  MAN: 'man',
} as const;

export const GENDERS_UA: Record<
  (typeof GENDERS)[keyof typeof GENDERS],
  string
> = {
  woman: 'Жіноче',
  man: 'Чоловіче',
};
