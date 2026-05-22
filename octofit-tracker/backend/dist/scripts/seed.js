"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("../config/database");
const models_1 = require("../models");
// Seed the octofit_db database with test data.
const seed = async () => {
    console.log('Seed the octofit_db database with test data');
    console.log(`Connecting to ${database_1.MONGO_URI}`);
    await mongoose_1.default.connect(database_1.MONGO_URI);
    await Promise.all([
        models_1.ActivityModel.deleteMany({}),
        models_1.LeaderboardEntryModel.deleteMany({}),
        models_1.TeamModel.deleteMany({}),
        models_1.UserModel.deleteMany({}),
        models_1.WorkoutModel.deleteMany({}),
    ]);
    const teams = await models_1.TeamModel.insertMany([
        { city: 'San Francisco', memberCount: 4, name: 'Octo Striders', weeklyGoalMinutes: 900 },
        { city: 'Austin', memberCount: 3, name: 'Branch Lifters', weeklyGoalMinutes: 720 },
        { city: 'Seattle', memberCount: 5, name: 'Merge Runners', weeklyGoalMinutes: 1050 },
    ]);
    const users = await models_1.UserModel.insertMany([
        { email: 'maya.chen@example.com', fullName: 'Maya Chen', preferredActivity: 'trail running', teamName: 'Octo Striders' },
        { email: 'jordan.lee@example.com', fullName: 'Jordan Lee', preferredActivity: 'cycling', teamName: 'Branch Lifters' },
        { email: 'priya.patel@example.com', fullName: 'Priya Patel', preferredActivity: 'strength training', teamName: 'Merge Runners' },
        { email: 'sam.rivera@example.com', fullName: 'Sam Rivera', preferredActivity: 'rowing', teamName: 'Octo Striders' },
    ]);
    const activities = await models_1.ActivityModel.insertMany([
        { activityType: 'Run', caloriesBurned: 420, durationMinutes: 45, loggedAt: new Date('2026-05-18T13:00:00Z'), userEmail: 'maya.chen@example.com' },
        { activityType: 'Cycle', caloriesBurned: 560, durationMinutes: 60, loggedAt: new Date('2026-05-19T22:30:00Z'), userEmail: 'jordan.lee@example.com' },
        { activityType: 'Strength', caloriesBurned: 310, durationMinutes: 40, loggedAt: new Date('2026-05-20T12:15:00Z'), userEmail: 'priya.patel@example.com' },
        { activityType: 'Row', caloriesBurned: 480, durationMinutes: 50, loggedAt: new Date('2026-05-21T11:45:00Z'), userEmail: 'sam.rivera@example.com' },
        { activityType: 'Yoga', caloriesBurned: 180, durationMinutes: 35, loggedAt: new Date('2026-05-22T14:20:00Z'), userEmail: 'maya.chen@example.com' },
    ]);
    const leaderboard = await models_1.LeaderboardEntryModel.insertMany([
        { rank: 1, score: 1840, teamName: 'Octo Striders', userEmail: 'maya.chen@example.com', userName: 'Maya Chen' },
        { rank: 2, score: 1715, teamName: 'Branch Lifters', userEmail: 'jordan.lee@example.com', userName: 'Jordan Lee' },
        { rank: 3, score: 1630, teamName: 'Merge Runners', userEmail: 'priya.patel@example.com', userName: 'Priya Patel' },
        { rank: 4, score: 1585, teamName: 'Octo Striders', userEmail: 'sam.rivera@example.com', userName: 'Sam Rivera' },
    ]);
    const workouts = await models_1.WorkoutModel.insertMany([
        { description: 'A short interval run with warmup and cooldown blocks.', difficulty: 'beginner', durationMinutes: 30, focusArea: 'cardio endurance', name: 'Starter Sprint Mix' },
        { description: 'Compound lifts and bodyweight movements for balanced strength.', difficulty: 'intermediate', durationMinutes: 45, focusArea: 'total body strength', name: 'Full Stack Strength' },
        { description: 'Steady cycling intervals built around cadence control.', difficulty: 'intermediate', durationMinutes: 50, focusArea: 'cycling power', name: 'Cadence Builder' },
        { description: 'Longer rowing intervals with high-effort finishing sprints.', difficulty: 'advanced', durationMinutes: 55, focusArea: 'rowing stamina', name: 'Pull Request Power' },
    ]);
    console.log(`Seeded ${database_1.MONGO_DB}: ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboard.length} leaderboard entries, ${workouts.length} workouts.`);
};
seed()
    .catch((error) => {
    console.error('Failed to seed database:', error);
    process.exitCode = 1;
})
    .finally(async () => {
    await mongoose_1.default.disconnect();
});
