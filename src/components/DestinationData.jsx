import React from "react";
import "./DestinationStyle.css";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";

function DestinationData(props) {
    return (
        <div>
            <div className={props.cName}>
                <div className="dest-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="image">
                    <img src={props.img1} alt="Image" />
                    <img src={props.img2} alt="Image" />
                </div>
            </div>
        </div>
    );
}

export default DestinationData;
