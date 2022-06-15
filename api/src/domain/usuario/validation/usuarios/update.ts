import { validate, Joi } from 'express-validation';

export const update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string().max(70).required(),
    email: Joi.string().email().max(70).required(),
    apartment: Joi.number().required(),
    password: Joi.string().max(120).required(),
  }),
});
