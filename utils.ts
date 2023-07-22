import fs from 'fs';
import { Todo } from './types';

const FILE_NAME = 'data/todos.json';

export function readTodos(): Todo {
    let todos: Todo={}

    try {
        let data=fs.readFileSync(FILE_NAME, 'utf8')
        todos = JSON.parse(data.toString());
        console.log(`> Loaded content: ${JSON.stringify(todos)}`)
    } catch (e) {
        console.error(`/!\\ Error parsing ${FILE_NAME}`);
        throw "ERR"
    }

    return todos
}

export function writeTodos(todos: Todo) {
    fs.writeFile(FILE_NAME, JSON.stringify(todos), err => {
        if (err) {
            console.error(`/!\\ Error writing ${FILE_NAME}`);
        } else {
            console.error(`> Saved content: ${JSON.stringify(todos)}`);
        }
    });
}

export function mkres(code: number, msg: string) {
    return JSON.stringify({ "result": { "code": `${code}`, "message": `${msg}` } })
}
