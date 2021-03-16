import React, {useState} from "react"


function PlusMinus() {
    let [getPoints, setPoints] = useState(1000)

    function plusPoints() {
        setPoints(getPoints + 1)
    }

    function minusPoints() {
        setPoints(getPoints - 1)
    }


    return (
        <div className="plusMinus">
            <h2>{getPoints}</h2>
            <div className="buttons">
                <button onClick={plusPoints}>Plus</button>
                <button onClick={minusPoints}>Minus</button>
            </div>
        </div>

    );
}

export default PlusMinus;
