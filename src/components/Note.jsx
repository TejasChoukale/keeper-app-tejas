import React, { useState, useRef, useEffect } from "react";

function Note({ id, title, content, priority, subPriority, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title,
    content,
    priority,
    subPriority: subPriority || 1
  });
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [isEditing]);

  function adjustTextareaHeight() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote(prevNote => ({
      ...prevNote,
      [name]: name === 'subPriority' ? parseInt(value) : value
    }));
  }

  function handleSave() {
    onUpdate(id, {
      ...editedNote,
      subPriority: editedNote.subPriority || 1
    });
    setIsEditing(false);
  }

  const priorityColors = {
    High: "red",
    Medium: "orange",
    Low: "green"
  };

  return (
    <div
      className="note"
      style={{
        borderLeft: `5px solid ${priorityColors[priority] || "green"}`,
        borderTop: `3px solid ${priorityColors[priority] || "green"}`
      }}
    >
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            ref={textareaRef}
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            placeholder="Note content"
            style={{
              height: "auto",
              minHeight: "80px",
              maxHeight: "400px",
              overflowY: "auto",
              resize: "vertical"
            }}
            onInput={adjustTextareaHeight}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <select
              name="priority"
              value={editedNote.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input
              type="number"
              name="subPriority"
              value={editedNote.subPriority || 1}
              onChange={handleChange}
              min="1"
              max="10"
              style={{ width: '70px' }}
              placeholder="Sub Priority"
            />
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <p>
            <strong>Priority:</strong> {priority}
            {subPriority && ` (Sub Priority: ${subPriority})`}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(id)}>DELETE</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;