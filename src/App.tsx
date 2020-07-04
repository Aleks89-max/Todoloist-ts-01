import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all'| 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState <Array<TasksType>>(
        [
            { id:1, title: 'HTML', isDone: true  },
            { id:2, title: 'JS', isDone: true  },
            { id:3, title: 'Css', isDone: false  },
            { id:4, title: 'Rest Api', isDone: false  },
            { id:5, title: 'Graph Ql', isDone: false  }
        ]
    )



    function removeTask (id: number) {
        let  filterTask = tasks.filter((t) => t.id !== id)
        setTasks(filterTask)
    }

    let [filter, setFilter] = useState <FilterValuesType> ("all")


    function changeFilter (value: FilterValuesType) {
        setFilter(value)

    }

    let taskForTodoList = tasks
    if(filter === "active") {
        taskForTodoList = tasks.filter((t) => t.isDone === false)
    }
    if (filter === "completed") {
        taskForTodoList = tasks.filter((t) => t.isDone === true)
    }
    return (
        <div className="App">
            <TodoList title ={'What to learn'}
                      task={taskForTodoList}
                      removeTask={removeTask}
                      changeFilter = {changeFilter}
            />


        </div>
    );
}

export default App;
