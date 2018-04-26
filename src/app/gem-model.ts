import { ReviewModel } from './review-model';

export class GemModel {
  id: number;
  name: string;
  price: number;
  fullImagePath: string;
  description: string;
  inventory: number;
  colors: string[];
  reviews: ReviewModel[];
}
