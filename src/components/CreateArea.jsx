//CreateArea.jsx

import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ 
    title: "", 
    content: "", 
    priority: "Low", 
    subPriority: 1 
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: name === 'subPriority' ? parseInt(value) : value
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd({
      ...note,
      subPriority: note.subPriority || 1
    });
    setNote({ title: "", content: "", priority: "Low", subPriority: 1 });
  }

  return (
    <div>
      <form>
        <input 
          name="title" 
          value={note.title} 
          onChange={handleChange} 
          placeholder="Title" 
        />
        <textarea 
          name="content" 
          value={note.content} 
          onChange={handleChange} 
          placeholder="Take a note..." 
          rows="3" 
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <select 
            name="priority" 
            value={note.priority} 
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input 
            type="number" 
            name="subPriority" 
            value={note.subPriority} 
            onChange={handleChange} 
            min="1" 
            max="10" 
            style={{ width: '70px' }}
            placeholder="Sub Priority"
          />
        </div>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;