import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


let tasks1: Array<TasksType> = [
    { id:1, title: 'HTML', isDone: false  },
    { id:2, title: 'JS', isDone: false  },
    { id:3, title: 'Css', isDone: false  },
    { id:4, title: 'Rest Api', isDone: false  },
    { id:5, title: 'Graph Ql', isDone: false  }
]
function removeTask (id: number) {
   tasks1 = tasks1.filter((t) => t.id !== id
    )
    console.log(tasks1)

}

function App() {
    return (
        <div className="App">
            <TodoList title ={'What to learn'}
                      task={tasks1}
                      removeTask={removeTask}/>


        </div>
    );
}

export default App;
