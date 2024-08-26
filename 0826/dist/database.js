"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const activeDB = () => {
        const getValidatedURL = () => {
            const DB_URI = process.env.DATA_BASE;
            if (typeof DB_URI !== 'string' || DB_URI.length <= 0) {
                throw new Error('Invalid DB URI');
            }
            return DB_URI;
        };
        return mongoose_1.default.connect(getValidatedURL());
    };
    try {
        const mongooseInstance = yield activeDB();
        if (mongooseInstance) {
            console.log('DB Connected!');
        }
        else {
            throw new Error('Could not connect');
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.connectDB = connectDB;
