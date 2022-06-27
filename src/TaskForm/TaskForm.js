import { useState } from "react";
import "../TaskForm/TaskForm.css"
function TaskForm({ onAdd }) {
    const [text, setText] = useState("");

    return (
        <form

            className="task_form"
            onSubmit={(e) => {
                e.preventDefault();
                onAdd(text);
                setText("");
            }}>
            <input className="task_input" type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className="add_btn"> Add &#43;</button>
        </form>
    )
}

export default TaskForm;