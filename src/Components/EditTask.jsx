function EditTask({onClick,onSave,...prop}) {
  return (
    <dialog open className="edit-task-dialog p-4">
      <div className="d-flex justify-content-end mb-4">
        <form method="dialog">
          <button className="create-project-button me-2" onClick={onClick}>Cancel</button>
        </form>
        <button className="add-project-button btn-dark" onClick={onSave}>Save</button>
      </div>

      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Title
        </label>
        <input id="taskTitle" type="text" className="form-control" ref={prop.title} />
      </div>

      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Description
        </label>
        <textarea
          id="taskDescription"
          className="form-control"
          rows="3"
          ref={prop.description}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="taskDueDate" className="form-label">
          Due Date
        </label>
        <input id="taskDueDate" type="date" className="form-control" ref={prop.date}/>
      </div>
    </dialog>
  );
}

export default EditTask;
