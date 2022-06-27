import TaskItem from "./TaskItem/TaskItem";


function TaskList({ task, onChange, onDelete }) {
    return (
        <div>
            {
                task.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList