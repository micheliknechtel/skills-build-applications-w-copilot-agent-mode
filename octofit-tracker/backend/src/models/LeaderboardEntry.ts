import { Schema, model } from 'mongoose';

export interface LeaderboardEntry {
  rank: number;
  score: number;
  teamName: string;
  userEmail: string;
  userName: string;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntry>(
  {
    rank: { type: Number, required: true },
    score: { type: Number, required: true },
    teamName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
  },
  { collection: 'leaderboard', timestamps: true }
);

export const LeaderboardEntryModel = model<LeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
