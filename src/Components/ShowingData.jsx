import { useRef, useState } from "react";

export default function ShowingData({ id, data, onDeleteProject }) {
    const [value, setValue] = useState([]);
    const item = data.find((item) => item.id === id);
    const tasks = useRef();

    function handleClick() {
        const newTask = tasks.current.value.trim();
        if (newTask) {
            setValue((prev) => [...prev, newTask]);
            tasks.current.value = "";
        }
    }

    function handleDeleteTask(indexToRemove) {
        setValue((prev) => prev.filter((_, index) => index !== indexToRemove));
    }

    function handleProjectDelete() {
        onDeleteProject(id);
    }

    return (
        <div className="show-container">
            <div className="show-child-container">
                <div className="header-with-delete">
                    <h1>{item.title}</h1>
                    <button className="delete-project-btn" onClick={handleProjectDelete}>
                        Delete
                    </button>
                </div>
                <p>{item.date}</p>
                <p>{item.description}</p>
                <hr />
            </div>

            <div className="task-section">
                <h2>Tasks</h2>
                <div className="task-input">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        ref={tasks}
                    />
                    <button onClick={handleClick}>Add Task</button>
                </div>

                <ul className="task-list">
                    {value.map((task, index) => (
                        <li className="task-item" key={index}>
                            {task}
                            <button onClick={() => handleDeleteTask(index)}>Clear</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
    