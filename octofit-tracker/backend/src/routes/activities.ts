import { Router } from 'express';
import { ActivityModel } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await ActivityModel.find().sort({ loggedAt: -1 }).lean();

  res.json({
    data: activities,
    resource: 'activities',
  });
});

export default router;
