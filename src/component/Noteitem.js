import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (

        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum necessitatibus ipsa placeat sit officiis quod iste vel minima maiores eligendi nihil porro, fugit possimus. Ut alias rem asperiores, modi maxime obcaecati delectus eos error inventore aliquam doloremque cumque accusamus explicabo ipsum velit commodi facere, dignissimos quibusdam quod. Commodi, magnam illo!</p>
                </div>
            </div>
        </div>

    )
}

export default Noteitem
