import React from 'react'
import "./TripStyle.css"
import TripData from './TripData'
import Img1 from "../assets/5.jpg"
import Img2 from "../assets/6.jpg"
import Img3 from "../assets/8.jpg"

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <div className="card-container">
            <TripData 
                Img = {Img1}
                title = "Trip From England"
                text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam vel consequatur placeat officiis a, tenetur dolor obcaecati sapiente assumenda.placeat officiis a, tenetur dolor obcaecati sapiente assumenda.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit "
            />
            <TripData 
                Img = {Img2}
                title = "Trip From Australia"
                text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam vel consequatur placeat officiis a, tenetur dolor obcaecati sapiente assumenda.placeat officiis a, tenetur dolor obcaecati sapiente assumenda.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit "
            />
            <TripData 
                Img = {Img3}
                title = "Trip From Sirilanka"
                text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam vel consequatur placeat officiis a, tenetur dolor obcaecati sapiente assumenda.placeat officiis a, tenetur dolor obcaecati sapiente assumenda.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit "
            />
        </div>

        </div>
    )
}

export default Trip
