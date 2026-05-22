import { Router } from 'express';
import { TeamModel } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await TeamModel.find().sort({ name: 1 }).lean();

  res.json({
    data: teams,
    resource: 'teams',
  });
});

export default router;
