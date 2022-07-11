import React, { useState, useEffect } from 'react'
import EditModal from './editModal';
import './card.css'

const card = (props) => {
    const { event, editEvent } = props
    const [openModal, setOpenModal] = useState(false)
    console.log(props)
    return (
        <>
            {

                <div key={event.id} className="cards">
                    <button onClick={() => { setOpenModal(true) }}>edit</button>
                    {openModal && <EditModal closeModal={setOpenModal} editEvent={editEvent} oldData={event} />}
                    <p>{event.date}</p>
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                    <p>{event.participants}</p>
                    <div>
                        <span>note</span>
                        <p>{event.note}</p>
                    </div>
                </div>

            }
        </>
    )
}

export default card