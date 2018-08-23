import Joi from 'joi';

export const DependentSchema = Joi.object().keys({
  relationship: Joi.string().valid('spouse', 'dependent'),
  first_name: Joi.string().alphanum().min(2).max(30),
  middle_initial: Joi.string().alphanum().min(1).max(30),
  last_name: Joi.string().alphanum().min(2).max(30),
  suffix: Joi.string().alphanum().min(1).max(30),
  gender: Joi.string().valid(['m', 'male', 'f', 'female']).required(),
  dob: Joi.date().min('01-01-1940').max('01-01-2001').required(),
  height: Joi.number(),
  weight: Joi.number(),
  tobacco: Joi.boolean().required(),
});

export const QuoteSchema = Joi.object().keys({
  session_id: Joi.string().required(),
  step: Joi.string().valid(['begin', 'plan_rec', 'all_plans', 'plan_detail', 'review', 'application']).required(),
  first_name: Joi.string().alphanum().min(2).max(30),
  middle_initial: Joi.string().alphanum().min(1).max(30),
  last_name: Joi.string().alphanum().min(2).max(30),
  suffix: Joi.string().alphanum().min(1).max(30),
  email: Joi.string().email({ minDomainAtoms: 2 }),
  phone: Joi.string().max(10).alphanum(),
  gender: Joi.string().valid(['m', 'male', 'f', 'female']).required(),
  dob: Joi.date().min('01-01-1940').max('01-01-2001').required(),
  height: Joi.number(),
  weight: Joi.number(),
  tobacco: Joi.boolean().required(),
  zip_code: Joi.string().alphanum().length(5).required(),
  fips_code: Joi.string().alphanum().required(),
  state_code: Joi.string().alphanum().required(),
  preferred_language: Joi.string(),
  dependents: Joi.array().items(DependentSchema),
});
