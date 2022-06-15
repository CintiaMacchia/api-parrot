import { validate, Joi } from 'express-validation';

export const create = validate({
  body: Joi.object({
    name: Joi.string().max(70).required(),
    email: Joi.string().max(70).required(),
    apartment: Joi.string().required(),
    password: Joi.string().max(120).required(),
  }),
});
