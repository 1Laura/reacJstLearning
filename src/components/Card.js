import React from "react"


function Card(cardStyle, image, name, description, date) {


    return (
        <div className="rowCard" style={cardStyle}>
            <div className="oneCard">
                <div id="img">
                    <img id="imgEarth" src={image} alt=""/>
                </div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h6>{date}</h6>
            </div>

        </div>

    );
}

export default Card;
