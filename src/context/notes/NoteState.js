import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesinitial = [
        {
            "_id": "64bc08460f874ab6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3c676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f574aa6e3d3s676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f574aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc18460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "68bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d675",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },

    ]
    // const s1 = {
    //     "name": "OP",
    //     "class": "5B"
    // }
    // const [state, setstate] = useState(s1)
    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "Larry",
    //             "class": "10b"
    //         })
    //     }, 1000);
    // }
    // { state, update }
    const [notes, setNotes] = useState(notesinitial)

    const addNote = (title, description, tag) => {
        console.log("adding a new note")
        const note = {
            "_id": "84bc2b08964706c6fc057fb6",
            "user": "64baa2278f8bdf1e7878990c",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-22T19:16:24.505Z",
            "__v": 0
        };
        setNotes(notes.concat(note))

    }
    const deleteNote = (id) => {
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    const editNote = (id, title, description, tag) => {
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;

            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

