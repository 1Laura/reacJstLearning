import '../App.css';
import Card from "./Card"
import {useState} from "react";


function App() {
    let [getShadow, setShadow] = useState(true)
    let [getBgColor, setBgColor] = useState('white')

    let arr = [
        {
            color: "#86bb58",
            shadow: true,
            border: false,
            text: "Hello hello, how are you",
            counter: 50,
            class: 'active'
        },
        {
            color: "#1985b1",
            shadow: false,
            border: true,
            text: "New text here, random stuff",
            counter: 15,
            class: 'disabled'
        },
        {
            color: "#7e58bb",
            shadow: true,
            border: true,
            text: "third item in array",
            counter: 88,
            class: 'active'
        },
        {
            color: "#bb5864",
            shadow: false,
            border: false,
            text: "Last but not least",
            counter: 95,
            class: 'active'
        },
    ]

// for each object create component which will:
// have button with color in object, clicking that button will send that color to parent object=>
// <=and set it as parent background color
// have shadow depending on shadow key
// have border depending on border key
// will have text inside depending on text key
// will have button to add counter - sending counter number to parent component and adds to total sum
// will have class active or disabled depending on class key, (both classes should make component look different)

    
    return (
        <div style={{backgroundColor: getBgColor}} className={"App"}>

            {
                arr.map((item, index) =>
                    <Card
                        key={index}
                        item={item}
                        style={item.color}
                        changeBg={(color) => setBgColor(color)}
                    />
                )
            }

        </div>
    );


}

export default App