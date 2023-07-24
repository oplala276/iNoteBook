import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesinitial = []
    const [notes, setNotes] = useState(notesinitial)

    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYWEyMjc4ZjhiZGYxZTc4Nzg5OTBjIn0sImlhdCI6MTY5MDAyOTI5OH0.sNkVjw7mSBzcENGSPPC1xVo5Wj_l6yie8ZfkFLpsrcY"
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYWEyMjc4ZjhiZGYxZTc4Nzg5OTBjIn0sImlhdCI6MTY5MDAyOTI5OH0.sNkVjw7mSBzcENGSPPC1xVo5Wj_l6yie8ZfkFLpsrcY"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        console.log(note)

        setNotes(notes.concat(note))

    }
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYWEyMjc4ZjhiZGYxZTc4Nzg5OTBjIn0sImlhdCI6MTY5MDAyOTI5OH0.sNkVjw7mSBzcENGSPPC1xVo5Wj_l6yie8ZfkFLpsrcY"
            },
        });
        const json = response.json();
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYWEyMjc4ZjhiZGYxZTc4Nzg5OTBjIn0sImlhdCI6MTY5MDAyOTI5OH0.sNkVjw7mSBzcENGSPPC1xVo5Wj_l6yie8ZfkFLpsrcY"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{
            notes, addNote, deleteNote, editNote, getNotes
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

