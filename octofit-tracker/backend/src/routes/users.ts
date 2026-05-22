import { Router } from 'express';
import { UserModel } from '../models';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await UserModel.find().sort({ fullName: 1 }).lean();

  res.json({
    data: users,
    resource: 'users',
  });
});

export default router;
