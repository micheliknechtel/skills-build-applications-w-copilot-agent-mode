import { Router } from 'express';
import { LeaderboardEntryModel } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardEntryModel.find().sort({ rank: 1 }).lean();

  res.json({
    data: leaderboard,
    resource: 'leaderboard',
  });
});

export default router;
