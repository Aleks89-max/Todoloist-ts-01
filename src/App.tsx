import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState <Array<TasksType>>(
        [
            { id:1, title: 'HTML', isDone: false  },
            { id:2, title: 'JS', isDone: false  },
            { id:3, title: 'Css', isDone: false  },
            { id:4, title: 'Rest Api', isDone: false  },
            { id:5, title: 'Graph Ql', isDone: false  }
        ]
    )


    function removeTask (id: number) {
        let  filterTask = tasks.filter((t) => t.id !== id)
        setTasks(filterTask)
    }


    return (
        <div className="App">
            <TodoList title ={'What to learn'}
                      task={tasks}
                      removeTask={removeTask}/>


        </div>
    );
}

export default App;
