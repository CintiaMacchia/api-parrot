import { create } from './posts/create';
import { update } from './posts/update';
import { getOne } from './posts/getOne';
import { destroy } from './posts/destroy';

export const postValidation = {
  create,
  update,
  getOne,
  destroy,
};
