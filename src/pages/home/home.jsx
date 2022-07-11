import React, { useState, useEffect } from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Navbar from '../../components/Navbar/navbar'
import Card from './components/card/card'
import Modal from './components/card/modal'

const home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [event, setEvent] = useState([])

  const getData = async () => {
    const response = await fetch('  http://localhost:3000/event')
    const myJson = await response.json();
    setEvent(myJson);
    console.log(myJson);
  }

  useEffect(() => {
    getData();
  }, [])

  const addEvent = async (datas) => {
    const data = {
      title: datas.title,
      date: datas.date,
      location: datas.location,
      participants: [
        "John Doe",
        "John Doe",
        "John Doe"
      ],
      note: datas.note
    }
    const response = await fetch('http://localhost:3000/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    await getData();
  }

  const editEvent = async (oldDatas) => {
    const data = {
      title: oldDatas.title,
      date: oldDatas.date,
      location: oldDatas.location,
      participants: [
        "John Doe",
        "John Doe",
        "John Doe"
      ],
      note: oldDatas.note
    }
    const response = await fetch('http://localhost:3000/event/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    await getData();
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="HomeContainer">
        <Navbar />
        <h1>Events</h1>
        <button onClick={() => { setOpenModal(true) }}>Add</button>
        {openModal && <Modal closeModal={setOpenModal} addEvent={addEvent} />}
        <div className="EventContainer">
          <div className="card">
            {event.map((item) => (
              <Card event={item} editEvent={editEvent} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default home