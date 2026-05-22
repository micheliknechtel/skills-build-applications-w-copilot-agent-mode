"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const workouts = await models_1.WorkoutModel.find().sort({ difficulty: 1, name: 1 }).lean();
    res.json({
        data: workouts,
        resource: 'workouts',
    });
});
exports.default = router;
