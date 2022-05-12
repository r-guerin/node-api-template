import { respondWithNoContent } from '@src/server/helpers';
import { Router } from 'express';

const router = Router();

router.head('/ping', (_req, res) => {
  respondWithNoContent(res);
});

router.get('/ping', (_req, res) => {
  respondWithNoContent(res);
});

export { router };
