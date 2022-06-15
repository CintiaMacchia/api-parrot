import { create } from './usuarios/create';
import { update } from './usuarios/update';
import { getOne } from './usuarios/getOne';
import { destroy } from './usuarios/destroy';

export const usersValidation = {
  create,
  update,
  getOne,
  destroy,
};
