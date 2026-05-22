"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await models_1.UserModel.find().sort({ fullName: 1 }).lean();
    res.json({
        data: users,
        resource: 'users',
    });
});
exports.default = router;
