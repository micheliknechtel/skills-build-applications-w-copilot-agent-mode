"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    activityType: { type: String, required: true },
    caloriesBurned: { type: Number, required: true },
    durationMinutes: { type: Number, required: true },
    loggedAt: { type: Date, required: true },
    userEmail: { type: String, required: true },
}, { timestamps: true });
exports.ActivityModel = (0, mongoose_1.model)('Activity', activitySchema);
