import './App.css';
import Amount from "./numbersBox/Amount"
import {useState} from 'react'

function NumbersBox() {
    let [getState, setState] = useState(500)

    function sumAll(sum) {
        setState(getState + sum)
    }

    return (
        <div className="Number">
            <div><h1>{getState}</h1></div>
            <div className="numberBox">
                <Amount addNum={sumAll} sum={5}/>
                <Amount addNum={sumAll} sum={10}/>
                <Amount addNum={sumAll} sum={50}/>
            </div>


        </div>
    );
}

export default NumbersBox;
