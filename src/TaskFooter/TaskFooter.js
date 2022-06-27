import "../TaskFooter/TaskFooter.css"

function TaskFooter({ task, onClearCompleted }) {
   const allCompleted =  task.filter((task) => task.isCompleted).length;
    return (
        <div className="task_Footer" >
            <span>{allCompleted}/{task.length} Completed </span>
            <button  className="task_clear_btn"
            onClick={onClearCompleted}> Clear Completed</button>
        </div>
    )
}

export default TaskFooter;