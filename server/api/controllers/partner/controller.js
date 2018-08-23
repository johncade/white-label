import uuidv1 from 'uuid/v1';
import PartnerService from '../../services/partner.service';
import logger from '../../../common/logger';

export class Controller {
  byId(req, res) {
    PartnerService.get(req.query.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  qoute(req, res) {
    PartnerService
      .qoute(req.body)
      .then(() => {
        res.redirect(301, 'https://kindhealth.co');
      })
      .catch(err => {
        logger.error(err);
        res.set('uuid', uuidv1()).status(500).json({ message: 'There was an error generating your qoute.' });
      });
  }

  test(req, res) {
    PartnerService
      .test()
      .then(r => {
        res.send(r);
      });
  }

  create(req, res) {
    PartnerService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }
}
export default new Controller();
