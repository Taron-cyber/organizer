import { useState } from 'react';
import './App.css';
import TaskFooter from "./TaskFooter/TaskFooter";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList";

function App() {

  const [task, setTask] = useState([

    {
      id: Math.random(),
      text: "First Task",
      isCompleted: false
    },


    {
      id: Math.random(),
      text: "Second Task",
      isCompleted: false
    },
  ]);

  return (
    <div className="App">
      <TaskForm onAdd={(text) => {
        setTask([
          ...task,
          {
            id: Math.random(),
            text: text,
            isComplated: false
          }
        ]);
      }} />
      <TaskList task={task}
        onDelete={(task) => {
          setTask(task.filter((t) => t.id !== task.id));
        }}
        onChange = {(newTask)=> {
          setTask(task.map((task) => {
              if(task.id === newTask.id){
                return newTask;
              }
              return task;
          }));
        }}
      />
      <TaskFooter task={task} onClearCompleted={() => {
        setTask(task.filter((task) => !task.isCompleted));
      }} />
    </div>
  );
}
export default App;
