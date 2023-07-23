import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesinitial = [
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc08460f874aa6e3d3d676",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T16:48:06.463Z",
            "__v": 0
        },
        {
            "_id": "64bc2b08964706c6fc057fb6",
            "user": "64baa2278f8bdf1e7878990c",
            "title": "my file",
            "description": "please wake",
            "tag": "personal",
            "date": "2023-07-22T19:16:24.505Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesinitial)
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
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

