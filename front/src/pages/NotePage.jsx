import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
 export const NotePage = ({match,history}) => {
  let noteid = match.params.id;
  let [note,setNote] = useState(null);  
  
  useEffect(() =>{
    getNote();
  },[noteid])

  let getNote = async () => {
    // path('note/<str:pk>/',views.getNote,name='note'),    

    let res= await fetch(`/api/note/${noteid}/`);
    let data = await res.json();
    setNote(data);
  }
let deleteNote =async () => {
    // path('note/delete/<str:pk>',views.deleteNote,name='delete'),
    await fetch(`/api/note/delete/${noteid}/`, {
        method:"DELETE",
        'headers': {
            'Content-Type':'application/json'
        }
    })
    history.push('/')
}

let updateNote =async () => {
    await fetch(`/api/note/update/${noteid}/`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    
    })
}

let createNote =async () => {
    await fetch(`/api/note/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    
    })
}
  let handleSubmit =() => {
    if(noteid!== 'new' && note.body ==''){
        deleteNote();
    }else if(noteid!=='new'){
        updateNote();
    }else if(noteid==='new' && note.body!==''){
            createNote();
    }

    history.push('/');
  }

  let handleChange = ( value) => {
    setNote({...note,'body':value});
  }
  return (
    <div>
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft  onClick={handleSubmit}/>
                </h3>
                {noteid !=='new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
        </div>
    </div>
  )
}
