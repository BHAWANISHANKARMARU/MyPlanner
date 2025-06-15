import { useState, useRef } from "react";
import EditTask from "./EditTask";
import NoFileSelected from "./NoFileSelected";
import ShowingData from "./ShowingData";

export default function ToDoList() {
    const [isTrue, setIsTrue] = useState(false);
    const [allContent, setAllContent] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [isShow, setShow] = useState(false);

    const title = useRef(null);
    const description = useRef(null);
    const date = useRef(null);

    function handleClick() {
        setIsTrue((prev) => !prev);
    }

    function handleSave() {
        const newItem = {
            id: Date.now(),
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
        };
        setAllContent((prevContent) => [...prevContent, newItem]);
        setIsTrue(false);

        title.current.value = '';
        description.current.value = '';
        date.current.value = '';
    }

    function handleShow(item) {
        setSelectedId(item.id);
        setShow(true);
    }

    function handleDeleteProject(idToDelete) {
        setAllContent((prev) => prev.filter((item) => item.id !== idToDelete));
        setSelectedId(null);
        setShow(false);
    }

    return (
        <div className="container-fluid" style={{ background: '#D2B48C' }}>
            <div className="row" style={{ minHeight: "100vh" }}>
                <div
                    className="col-3 text-light p-4"
                    style={{ background: '#865D36', marginTop: '50px', borderRadius: '0px 20px 0px 0px' }}>
                    <h3 className="fs-5 p-4" style={{ color: '#EAD7BB' }}>YOUR PROJECTS</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item p-4">
                            <button className="add-project-button" onClick={handleClick}>
                                + Add Project
                            </button>
                        </li>
                    </ul>

                    <ul className="showing-title">
                        {allContent.map((item) => (
                            <li key={item.id}>
                                <button
                                    className={item.id === selectedId ? "active-project" : ""}
                                    onClick={() => handleShow(item)}>
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col d-flex align-items-center justify-content-center p-4">
                    {isTrue ? (
                        <EditTask
                            onClick={handleClick}
                            onSave={handleSave}
                            title={title}
                            description={description}
                            date={date}
                        />
                    ) : isShow ? (
                        <ShowingData
                            id={selectedId}
                            data={allContent}
                            onDeleteProject={handleDeleteProject}
                        />
                    ) : (
                        <NoFileSelected onClick={handleClick} />
                    )}
                </div>
            </div>
        </div>
    );
}
