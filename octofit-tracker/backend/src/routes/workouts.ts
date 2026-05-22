import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    data: [],
    resource: 'workouts',
  });
});

export default router;
