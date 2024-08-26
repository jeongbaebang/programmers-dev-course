"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const userRoutes_1 = __importDefault(require("./routes/v1/userRoutes"));
const database_1 = require("./database");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // JSON 형식의 데이터 파싱
app.use(body_parser_1.default.urlencoded({ extended: true }));
// DB연결
(0, database_1.connectDB)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/v1/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`http://localhost:3000`);
});
