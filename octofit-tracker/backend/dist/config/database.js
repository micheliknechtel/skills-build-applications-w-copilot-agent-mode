"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_PORT = exports.MONGO_DB = exports.connectDatabase = exports.MONGO_URI = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_PORT = Number(process.env.MONGO_PORT) || 27017;
exports.MONGO_PORT = MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB || 'octofit_db';
exports.MONGO_DB = MONGO_DB;
exports.MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`;
const connectDatabase = async () => mongoose_1.default.connect(exports.MONGO_URI);
exports.connectDatabase = connectDatabase;
