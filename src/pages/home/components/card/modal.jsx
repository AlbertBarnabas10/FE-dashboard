import React, {useState, useEffect} from 'react'

const modal = ({closeModal, addEvent}) => {
  const [datas, setData] = useState({
    date: "",
    title: "",
    location: "",
    participants: "",
    note: ""
  })

  const handle = (e) =>{
    const newData = {...datas}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);
  }

  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <button onClick={()=> closeModal(false)}>X </button>
        <div className="ModalTop">
           <h2>Add New Event</h2> 
        </div>
        <div className="ModalCenter">
          <form>
            <input onChange={(e)=>{handle(e)}} id="date" value={datas.date} type="date" placeholder="date"/>
            <input onChange={(e)=>{handle(e)}} id="title" value={datas.title} type="text" placeholder="title" />
            <input onChange={(e)=>{handle(e)}} id="location" value={datas.location} type="text" placeholder="location"/>
            <input onChange={(e)=>{handle(e)}} id="participants" value={datas.participants} type="text" placeholder="participants" />
            <input onChange={(e)=>{handle(e)}} id="note" value={datas.note} type="text" placeholder="note"/>
          </form>
        </div>
        <div className="ModalFooter">
            <button onClick={()=> closeModal(false)} >Cancel</button>
            <button onClick={()=>addEvent(datas)}>Done</button>
        </div>
      </div>
    </div>
  )
}

export default modal