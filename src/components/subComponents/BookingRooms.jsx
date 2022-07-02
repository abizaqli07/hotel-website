import React from "react";
import RoomData from "./RoomData"
import Rooms from "./Rooms"

function BookingRooms(){
  const [room, setRoom] = React.useState(RoomData)

  function chooseRoom(id){
    setRoom((prev) => {
      return prev.map((rooms) => {
        return rooms.id === id ? {...rooms, on: !rooms.on} : rooms
      })
    })
  }

  const roomElements = room.map((room) => (
    <Rooms
      key={room.id}
      on={room.on}
      toggle={() => chooseRoom(room.id)}
    />
  ))

  return (
    <div className="grid grid-cols-[repeat(2,_minmax(100px,120px))] justify-center gap-8 mt-16 lg:grid-cols-[repeat(3,_minmax(100px,120px))] xl:grid-cols-[repeat(4,_minmax(100px,120px))]">
      {roomElements}
    </div>
  )
}

export default BookingRooms;