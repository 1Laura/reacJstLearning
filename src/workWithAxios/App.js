import '../App.css'
import Comp from './Comp.js'
import {useState} from "react";
import Axios from 'axios'

function App() {

    const [joke, setJoke] = useState(null)

    function getJoke() {
        Axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className={"d-block m-5 text-center"}>
            <Comp/>
        </div>
    )
}

export default App