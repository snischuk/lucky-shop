
export type Gender = 'man' | 'woman'

import type { GENDERS } from '../constants/genders';

export type Gender = (typeof GENDERS)[keyof typeof GENDERS];
