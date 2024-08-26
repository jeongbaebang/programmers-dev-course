"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = void 0;
const async_wave_1 = require("async-wave");
const userModel_1 = __importDefault(require("../model/userModel"));
const read = (req, res) => {
    const getUserFormDB = () => userModel_1.default.find();
    const validateUser = (users) => {
        if (users.length === 0) {
            throw new Error('500');
        }
        return users;
    };
    (0, async_wave_1.asyncWave)([getUserFormDB, validateUser], {
        onSuccess: (payload) => {
            res.status(200).json({ payload });
        },
        onError: (error) => {
            const statusCode = parseInt(error.message);
            if (statusCode === 404) {
                return res.status(404).json({ message: 'Not Found' });
            }
            return res.status(500).json({ error: 'Inter Server Error' });
        },
    });
};
exports.read = read;
