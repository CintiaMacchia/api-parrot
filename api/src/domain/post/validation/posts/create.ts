import { validate, Joi } from 'express-validation';

export const create = validate({
  body: Joi.object({
    user_id: Joi.number(),
    content: Joi.string().max(200).required(),
  }),
});