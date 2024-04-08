import React from 'react'
import "./TripStyle.css"
import Img from "../assets/5.jpg"

function TripData(props) {
  return (
    <div className='tripCard'>
      <div className="imageBox">
        <img src={props.Img} alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}


export default TripData
