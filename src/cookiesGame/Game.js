import './Game.css';
import Start from "./Start"
import {useState} from 'react'


function Game() {
    let [getState, setState] = useState('jonas')


    function sayHi(name) {
        setState(name)
        // console.log('labas labas' + name)
    }

    return (
        <div className="Game">
            <h2>veikia</h2>

            {/*<h1>{getState}</h1>*/}
            <h2>Lab</h2>
            {/*<Start changeName={sayHi()}/>*/}
        </div>
    );
}

export default Game;
