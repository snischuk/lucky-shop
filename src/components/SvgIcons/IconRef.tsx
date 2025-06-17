import ArrowLeft from './Icons/ArrowLeft';
import ArrowRight from './Icons/ArrowRight';
import Star from './Icons/Star';
import Tick from './Icons/Tick';

export enum CustomRefEnum {
  Star = 'Star',
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
  CircleTick = 'CircleTick',
}

export const CustomIconRef: any = {
  [CustomRefEnum.Star]: Star,
  [CustomRefEnum.ArrowRight]: ArrowRight,
  [CustomRefEnum.ArrowLeft]: ArrowLeft,
  [CustomRefEnum.CircleTick]: Tick,
};
