import '../App.css';
import Form from "./Form";
import Card from "./Card";
import {useState} from "react";

function App() {
    let [getTaskList, setTaskList] = useState([])

    function saveTask(task) {
        function randomNum() {
            return Math.floor(Math.random() * Math.floor(255))
        }
        let x = getTaskList
        x.push({task, time: new Date(), color: `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`})
        setTaskList([...x])
    }

    // console.log(getTaskList)
    return (
        <div className={"App"}>
            <Form
                addTask={saveTask}
            />
            {
                getTaskList.map((item, index) =>
                    <Card
                        key={index}
                        item={item}
                    />
                )
            }


        </div>
    )
}

export default App