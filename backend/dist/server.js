"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use((0, morgan_1.default)('dev'));
// middlewares
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.get('/', (req, res) => {
    console.log('Hola mundo');
    res.send('Hola mundo');
});
const PORT = process.env.port || process.env.url;
server.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map