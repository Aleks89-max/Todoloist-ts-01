import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


const tasks1: Array<TasksType> = [
    { id:1, title: 'HTML', isDone: false  },
    { id:2, title: 'JS', isDone: false  },
    { id:3, title: 'Css', isDone: false  }
]
const  tasks2: Array<TasksType> = [
    { id:1, title: 'Beer', isDone: false  },
    { id:2, title: 'Fish', isDone: false  },
    { id:3, title: 'Cheeps', isDone: false  }
]

function App() {
    return (
        <div className="App">
            <TodoList title ={'What to learn'} task={tasks1} />
            <TodoList title ={'Songs'} task={tasks2} />

        </div>
    );
}

export default App;
