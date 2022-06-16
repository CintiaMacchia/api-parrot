import { validate, Joi } from 'express-validation';

export const loginValidation = validate({
  body: Joi.object({
    email: Joi.string().email().max(70).required(),
    password: Joi.string().max(120).required(),
  }),
});
