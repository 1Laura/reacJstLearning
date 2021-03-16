import Amount from "src/numbersBox/Amount"
import {useState} from 'react'

function FiveHundred() {
    let [getState, setState] = useState(500)

    return (
        <div className="App">
            <h1>{getState}</h1>
            <Amount/>


        </div>
    );
}

export default FiveHundred;
