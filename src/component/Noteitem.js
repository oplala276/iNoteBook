import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (

        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{note.title}</h5>
                        <div style={{ marginLeft: 'auto' }}>
                            <i className='far fa-trash-alt mx-2' onClick={() => {
                                deleteNote(note._id)
                            }}></i>
                            <i className='far fa-edit mx-2' onClick={() => { updateNote(note) }}></i>
                        </div>

                    </div>

                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum necessitatibus ipsa placeat sit officiis quod iste vel minima maiores</p>

                </div>
            </div>
        </div >

    )
}

export default Noteitem
