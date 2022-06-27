import "../TaskItem/TaskItem.css"

function TaskItem({ task, onChange, onDelete }) {
    return (
        <div className="task_List_Item">
            <label>
                <input  type="checkbox" checked={task.isCompleted} onChange={(e) => {
                    onChange({
                        ...task,
                        isCompleted: e.target.checked
                    });
                }} />
                {task.text}
            </label>
            <button className="del_btn" onClick={() => {
                    onDelete(task);
                }}>X</button>
        </div>
    )
}

export default TaskItem;