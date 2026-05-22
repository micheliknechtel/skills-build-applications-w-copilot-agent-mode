import { Schema, model } from 'mongoose';

export interface Activity {
  activityType: string;
  caloriesBurned: number;
  durationMinutes: number;
  loggedAt: Date;
  userEmail: string;
}

const activitySchema = new Schema<Activity>(
  {
    activityType: { type: String, required: true },
    caloriesBurned: { type: Number, required: true },
    durationMinutes: { type: Number, required: true },
    loggedAt: { type: Date, required: true },
    userEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const ActivityModel = model<Activity>('Activity', activitySchema);
