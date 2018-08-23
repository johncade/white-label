import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.qoute)
  .get('/', controller.test)
  .get('/:id', controller.byId);
