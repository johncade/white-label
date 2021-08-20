import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import examplesRouter from './api/controllers/examples/router';
import partnerRouter from './api/controllers/partner/router';


export default function routes(app) {
  const swaggerDoc = YAML.load(path.join(__dirname, 'common/swagger/Api.yaml'));
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/wl', partnerRouter);
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  // app.get('*', (req, res) => {
  //   res.redirect('/swagger');
  // });
}
