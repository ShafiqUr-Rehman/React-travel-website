// Destination.js
import React from "react";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";

function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum.</p>
            <DestinationData
                cName="first-des"
                heading="Best travel Website"
                text="Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non accusamus. Illo veritatis incidunt, ea suscipit placeat dignissimos nesciunt maxime? consectetur adipisicing elit. Pariatur sit error deserunt eos harum, suscipit obcaecati quo repellat dignissimos debitis assumenda. Ratione, cum pariatur illum architecto alias dolores voluptate provident.z ea suscipit placeat dignissimos nesciunt maxime? consectetur adipisicing elit. "
                img1={Img1}
                img2={Img2}
            />
            <DestinationData
                cName="second-des"
                heading="Best travel Website"
                text="Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non accusamus. Illo veritatis incidunt, ea suscipit placeat dignissimos nesciunt maxime? consectetur adipisicing elit. Pariatur sit error deserunt eos harum, suscipit obcaecati quo repellat dignissimos debitis assumenda. Ratione, cum pariatur illum architecto alias dolores voluptate provident.z Pariatur sit error deserunt eos harum, suscipit obcaecati quo repellat dignissimos debitis assumenda. Ratione, cum pariatur illum architecto alias dolores voluptate provident.z"
                img1={Img3}
                img2={Img4}
            />
        </div>
    );
}

export default Destination;
