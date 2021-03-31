import {useState} from "react";

function Form({addTask}) {
    let [getTask, setTask] = useState('')

    function sendTask() {
        addTask(getTask)
        setTask('')
    }

    return (
        <div>
            <input onChange={(e)=>setTask(e.target.value)} type="text" placeholder={"Entert task text"} value={getTask}/>
            <button onClick={() => sendTask()}>Add task</button>

        </div>
    )

}

export default Form