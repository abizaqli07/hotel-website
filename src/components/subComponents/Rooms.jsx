import React from "react";

function Rooms(props){
  const styles = {
    color: props.on ? "#37E72E" : "#ffffff"
  }

  return (
    <div
      style={styles}
      className="text-6xl font-bold cursor-pointer"
      onClick={props.toggle}
    >
      <i class="uil uil-bed-double"></i>
    </div>
  )
}

export default Rooms;