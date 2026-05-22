import { Schema, model } from 'mongoose';

export interface Team {
  city: string;
  memberCount: number;
  name: string;
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<Team>(
  {
    city: { type: String, required: true },
    memberCount: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);

export const TeamModel = model<Team>('Team', teamSchema);
