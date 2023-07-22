"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkres = exports.writeTodos = exports.readTodos = void 0;
const fs_1 = __importDefault(require("fs"));
const FILE_NAME = 'data/todos.json';
function readTodos() {
    let todos = {};
    try {
        let data = fs_1.default.readFileSync(FILE_NAME, 'utf8');
        todos = JSON.parse(data.toString());
        console.log(`> Loaded content: ${JSON.stringify(todos)}`);
    }
    catch (e) {
        console.error(`/!\\ Error parsing ${FILE_NAME}`);
        throw "ERR";
    }
    return todos;
}
exports.readTodos = readTodos;
function writeTodos(todos) {
    fs_1.default.writeFile(FILE_NAME, JSON.stringify(todos), err => {
        if (err) {
            console.error(`/!\\ Error writing ${FILE_NAME}`);
        }
        else {
            console.error(`> Saved content: ${JSON.stringify(todos)}`);
        }
    });
}
exports.writeTodos = writeTodos;
function mkres(code, msg) {
    return JSON.stringify({ "result": { "code": `${code}`, "message": `${msg}` } });
}
exports.mkres = mkres;
