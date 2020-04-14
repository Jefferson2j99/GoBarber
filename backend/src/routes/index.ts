import { Router } from 'express';

const routes = Router();

routes.get('/', (request, resolve) => resolve.json({ message: 'Hello1 Word' }));

export default routes;
