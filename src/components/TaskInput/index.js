import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import TaskList from '../TaskList'
import './index.css'



const TaskInput = () => {
    const [todoTask, onSettodo] = useState("")
    const [list, onList] = useState([])
    const onaddTodo = (e) => {
        onSettodo(e.target.value)
    }

    const deleteFunction = (id) => {
        const filteredList = list.filter(each => each.id !== id)
        onList(filteredList)

    }

    const saveTolocalstorage = () => {
        localStorage.setItem("todolist", JSON.stringify(list))
    }


    const onClickSubmit = (e) => {
        e.preventDefault()
        const todoDetails = {
            id: uuidv4(),
            todoTask: todoTask,
            isComplet: false
        }
        onList([...list, todoDetails])
        onSettodo("")
    }

    const updatefunction = (id) => {
        onList(list.map(each => {
            if (id === each.id) {
                return { ...each, isComplet: !each.isComplet }
            }
            return each
        }))

    }

    /*const sendUpdatedText = (value, id) => {
        onList(list.map(each => {
            if (id === each.id) {
                return { ...each, todoTask: value }
            }
            return each
        }))

        console.log(value)
    }*/


    return <div className='tasklist-main-container'>
        <h1 className='main-heading'>What's the plan for today?</h1>

        <form onSubmit={onClickSubmit} className='tasklist-sub-container'>
            <input type="text" className='input-element' placeholder="Add a Todo" onChange={onaddTodo} value={todoTask} />
            <div className='todo-para-container'>
                <button className='button-ele' >Add Todo</button>
            </div>
        </form>

        <ul className='ulELe'>{list.map(each => <TaskList details={each} key={each.id} deleteFunction={deleteFunction} updatefunction={updatefunction} />)}</ul>

    </div>


}

export default TaskInput