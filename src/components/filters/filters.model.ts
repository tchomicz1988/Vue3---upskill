import { Question } from '@/interfaces/question.interface';

export const FILTERS_INIT_VALUES: Partial<Question> = {
  question: null,
  type: null,
  level: null,
}

export enum FILTERS_LEVEL_OPTIONS {
  junior = 'junior',
  middle = 'middle',
  senior = 'senior'
}

export enum FILTERS_TYPE_OPTIONS {
  frontend = 'frontend',
  backend = 'backend'
}
