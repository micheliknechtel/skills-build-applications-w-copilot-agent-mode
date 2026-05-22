import { Schema, model } from 'mongoose';

export interface Workout {
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  focusArea: string;
  name: string;
}

const workoutSchema = new Schema<Workout>(
  {
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    focusArea: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const WorkoutModel = model<Workout>('Workout', workoutSchema);
