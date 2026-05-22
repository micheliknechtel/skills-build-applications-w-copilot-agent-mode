"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardEntryModel = void 0;
const mongoose_1 = require("mongoose");
const leaderboardEntrySchema = new mongoose_1.Schema({
    rank: { type: Number, required: true },
    score: { type: Number, required: true },
    teamName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
}, { collection: 'leaderboard', timestamps: true });
exports.LeaderboardEntryModel = (0, mongoose_1.model)('LeaderboardEntry', leaderboardEntrySchema);
