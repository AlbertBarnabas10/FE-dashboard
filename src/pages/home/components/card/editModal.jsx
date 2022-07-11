import React, {useState, useEffect} from 'react'

const editModal = ({closeModal, editEvent, oldData}) => {
  const [oldDatas, setOldDatas] = useState(oldData)
  console.log(oldDatas);
  const handle = (e) =>{
    const newData = {...oldDatas}
    newData[e.target.id] = e.target.value
    setOldDatas(newData)
    console.log(newData);
  }

  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <button onClick={()=> closeModal(false)}>X </button>
        <div className="ModalTop">
           <h2>Edit New Event</h2> 
        </div>
        <div className="ModalCenter">
          <form>
            <input onChange={(e)=>{handle(e)}} id="date" value={oldDatas.date} type="date" placeholder="date"/>
            <input onChange={(e)=>{handle(e)}} id="title" value={oldDatas.title} type="text" placeholder="title" />
            <input onChange={(e)=>{handle(e)}} id="location" value={oldDatas.location} type="text" placeholder="location"/>
            <input onChange={(e)=>{handle(e)}} id="participants" value={oldDatas.participants} type="text" placeholder="participants" />
            <input onChange={(e)=>{handle(e)}} id="note" value={oldDatas.note} type="text" placeholder="note"/>
          </form>
        </div>
        <div className="ModalFooter">
            <button onClick={()=> closeModal(false)} >Cancel</button>
            <button onClick={()=>editEvent(oldDatas)}>Done</button>
        </div>
      </div>
    </div>
  )
}

export default editModal