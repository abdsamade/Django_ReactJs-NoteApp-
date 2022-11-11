import React from 'react'
import { Link } from 'react-router-dom'
export const Note = ({note}) => {
  
  //Get The Title //
    let getTitle = (note)=> {
    let title = note.body.split('\n')[0];
    if(title.length>45){
        return title.slice(0,45);
    }else{
        return title;
    }
  }

  //Get The Time //
  
  let getTime= (note) => {
    return new Date(note.updated).toLocaleDateString();
  }

  //Get The content //
  let getContent = (note)=> {
    let title = getTitle(note);
    let content = note.body.replaceAll('\n',' ');
    content = content.replaceAll(title,'');
    if(content.length>45){
        return content.slice(0,45)+'...';
    }else{
        return content;
    }
  }
     return (
    <Link to={`/note/${note.id}`}>
    <div className="notes-list-item" >
        <h3>{getTitle(note)}</h3>
        <p><span>{getTime(note)}</span>{getContent(note)}</p>
    </div>

</Link>
)
}
