import { Schema, model } from 'mongoose';

export interface User {
  email: string;
  fullName: string;
  preferredActivity: string;
  teamName: string;
}

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    preferredActivity: { type: String, required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model<User>('User', userSchema);
