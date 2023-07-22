import express from 'express';
import { Todo } from './types';
import { readTodos, writeTodos, mkres } from './utils';

const app = express();
app.use(express.json());

let todos: Todo = readTodos();

app.get('/todos', (req, res) => {
    try {
        todos = readTodos()
        res.status(200).send(todos);
    } catch (e) {
        res.status(500).send('Internal server error');
    }
});

app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    //console.log(req.body)

    try {
        todos = readTodos()
        todos[title]=description
        writeTodos(todos)
        res.status(200).send(mkres(0,"ok"));
    } catch (e) {
        res.status(500).send('Internal server error');
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
