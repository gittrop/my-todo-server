"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use(express_1.default.json());
let todos = (0, utils_1.readTodos)();
app.get('/todos', (req, res) => {
    try {
        todos = (0, utils_1.readTodos)();
        res.status(200).send(todos);
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    //console.log(req.body)
    try {
        todos = (0, utils_1.readTodos)();
        todos[title] = description;
        (0, utils_1.writeTodos)(todos);
        res.status(200).send((0, utils_1.mkres)(0, "ok"));
    }
    catch (e) {
        res.status(500).send('Internal server error');
    }
});
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
