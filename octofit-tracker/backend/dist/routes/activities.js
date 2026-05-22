"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const activities = await models_1.ActivityModel.find().sort({ loggedAt: -1 }).lean();
    res.json({
        data: activities,
        resource: 'activities',
    });
});
exports.default = router;
