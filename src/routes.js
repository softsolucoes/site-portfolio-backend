import { Router } from 'express';
import MailController from './app/controllers/MailController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));
routes.post('/mail', MailController.store);

export default routes;
