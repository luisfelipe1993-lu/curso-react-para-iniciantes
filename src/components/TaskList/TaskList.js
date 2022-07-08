import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from '../TaskItem/TaskItem';

export default function Tasklist({ title, 
  taskState, 
  onAddTask, 
  tasks, 
  onTaskUpdate, 
  onDeleteTask }) {
   const addTask = () => {
     onAddTask("Nova Tarefa", taskState);
   };
  
  
  return (
     <div className="tasklist">
       <div className="title">{title}</div>
        <div className="content">
          {tasks.map((task) => {
             return (
             <TaskItem 
             key={task.key}
             id={task.id}
             title={task.title} 
             taskState={task.taskState}
             onTaskUpdate={onTaskUpdate}
             onDeleteTask={onDeleteTask}
             />
             );
            })}
        </div>
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    );
  }

Tasklist.PropTypes = {
   
   title: PropTypes.string.isRequired,
   onAddTask: PropTypes.string.isRequired,
   tasks: PropTypes.array.isRequired

};

