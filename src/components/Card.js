import React, {useState} from "react"


function Card(cardStyle, image, name, description, date) {
    let [getPlus, setPlus] = useState(10)
    let [getMinus, setMinus] = useState(10)


    return
    (
        <div className="rowCard" style={cardStyle}>
            <div>
                <h2></h2>

            </div>
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
