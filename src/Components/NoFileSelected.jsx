import reactImage from '../assets/no-projects.png'

export default function NoFileSelected({onClick}) {
    return <div
        className="col d-flex align-items-center justify-content-center p-4">
        <div className="text-center">
            <img src={reactImage} alt="project icon" className="d-block mx-auto mb-4" style={{ width: "100px", height: "100px" }} />
            <h4 className="mb-3">No Project Selected</h4>
            <p className="mb-4">
                Select a Project or get started with a new one
            </p>
            <button className="create-project-button" onClick={onClick}>Create new project</button>
        </div>
    </div>
}
