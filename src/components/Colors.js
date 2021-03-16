import React, {useState} from "react"

function Colors({colors}) {

    let [getColor, setColor] = useState('white')

    function changeColor(color) {
        setColor(color)

    }

    return (
        <div className="buttonColor" style={{backgroundColor: getColor}}>
            <button style={{backgroundColor: colors[0]}} onClick={() => changeColor(colors[0])}>click</button>
            <button style={{backgroundColor: colors[1]}} onClick={() => changeColor(colors[1])}>click</button>
            <button style={{backgroundColor: colors[2]}} onClick={() => changeColor(colors[2])}>click</button>
        </div>

    );
}


export default Colors;