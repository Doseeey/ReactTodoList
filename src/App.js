import logo from './logo.svg';
import './App.css';
import React from 'react';

let id = 0

const Todo = props => (
    <li>
        <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
        <button onClick={props.onDelete}>delete</button>
        <span>{props.todo.text}</span>
    </li>
)

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        const text = prompt("Todo task: ")
        this.setState({
            todos: [
                ...this.state.todos,
                {id: id++, text: text, checked: false}
            ],
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <div>Todo count: {this.state.todos.length}</div>
                <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
                <button onClick={() => this.addTodo()}>Add TODO</button>
                <ul>
                    {this.state.todos.map(todo => (
                        <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
