import './index.css'


import { MdDelete } from "react-icons/md";
import { useState } from "react"
import ReactPopup from '../popUp'
import React from 'react';

const TaskList = (props) => {
   const { details, deleteFunction, updatefunction } = props
   const { id, todoTask, isComplet } = details



   const taskDelete = () => {
      deleteFunction(id)
   }


   const checkboxElement = () => {
      updatefunction(id)
   }

   const [edit, onEdit] = useState("")

   const updating = (value) => {
      onEdit(value)
   }

   return <li className='liEle'>
      <div className='list-items'>
         <div className='checkbox-container'>
            <input type="checkbox" value={todoTask} className="checkbox" onChange={checkboxElement} />
            <p className={isComplet && "css"}>{todoTask}</p>
         </div>
         <div className='logos-container'>
            <ReactPopup update={updating} />
            <button onClick={taskDelete} className='button-logo'>  <MdDelete className='imported-logos' /></button>
         </div>
      </div>
   </li>
}
export default TaskList