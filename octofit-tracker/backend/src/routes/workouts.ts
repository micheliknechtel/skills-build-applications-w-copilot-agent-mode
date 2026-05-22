import { Router } from 'express';
import { WorkoutModel } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await WorkoutModel.find().sort({ difficulty: 1, name: 1 }).lean();

  res.json({
    data: workouts,
    resource: 'workouts',
  });
});

export default router;
