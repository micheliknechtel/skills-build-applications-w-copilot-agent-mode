"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const leaderboard = await models_1.LeaderboardEntryModel.find().sort({ rank: 1 }).lean();
    res.json({
        data: leaderboard,
        resource: 'leaderboard',
    });
});
exports.default = router;
