//App.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc 
} from "../firebase";

function App() {
  const [notes, setNotes] = useState([]);

  // 📌 Fetch Notes from Firebase on Component Mount
  useEffect(() => {
    async function fetchNotes() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const notesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesArray);
    }
    fetchNotes();
  }, []);

  // 📌 Add Note to Firebase
  async function addNote(newNote) {
    const docRef = await addDoc(collection(db, "notes"), newNote);
    setNotes([...notes, { id: docRef.id, ...newNote }]);
  }

  // 📌 Delete Note from Firebase
  async function deleteNote(id) {
    await deleteDoc(doc(db, "notes", id));
    setNotes(notes.filter((note) => note.id !== id));
  }

  // 📌 Update Note in Firebase
  async function updateNote(id, updatedNote) {
    try {
      // Update the document in Firestore
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, updatedNote);

      // Update the local state
      setNotes(notes.map(note => 
        note.id === id ? { ...note, ...updatedNote } : note
      ));
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  }

  // 📌 Sorting Notes
  const sortedNotes = [...notes].sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="app-container">
      <Header />
      <CreateArea onAdd={addNote} />
      
      {/* Wrapper for Full Page Coverage */}
      <div className="notes-container">
        {sortedNotes.map((noteItem) => (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            priority={noteItem.priority}
            subPriority={noteItem.subPriority}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;