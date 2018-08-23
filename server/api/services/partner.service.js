import Joi from 'joi';
import { QuoteSchema } from '../../validations/partnerApi';
import fs from 'fs';
import { promisify } from 'util';

import logger from '../../common/logger';
import db from './examples.db.service';

const validateRequest = promisify(Joi.validate);
class PartnerService {
  test() {
    return new Promise(resolve => {
      resolve('Works!');
    });
  }

  async qoute(data) {
    try {
      return await validateRequest(data, QuoteSchema);
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  get() {
    return new Promise(resolve => {
      resolve('Works!');
    });
  }
}
export default new PartnerService();
