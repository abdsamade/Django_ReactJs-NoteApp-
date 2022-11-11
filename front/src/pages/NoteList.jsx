import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Note } from '../components/Note';
import { Link } from 'react-router-dom';
import {ReactComponent as AddButton} from '../assets/add.svg'; 
export const NoteList = () => {
  const [notes,setNotes] = useState([]);
useEffect(() => {
    getNoetes();
})

  let getNoetes = async () => {
    let response =await fetch('/api/notes');
    let data = response.json();
    // console.log(data);
    setNotes(data);
}
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

        <div className="notes-list">
            {notes.map((note, index) => (
                <Note key={index} note={note} />
            ))}
        </div>
        <AddButton />
    </div>  )
}
