import Joi from 'joi';
import { QuoteSchema } from '../../validations/partnerApi';


import logger from '../../common/logger';
import db from './examples.db.service';

class PartnerService {
  test() {
    return new Promise(resolve => {
      resolve('Works!');
    });
  }

  qoute(data) {
    return new Promise((resolve, reject) => {
      try {
        const result = Joi.attempt(data, QuoteSchema);
        logger.info(result);
        resolve(result);
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  }

  get() {
    return new Promise(resolve => {
      resolve('Works!');
    });
  }
}
export default new PartnerService();
