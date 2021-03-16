import './App.css';
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Side from "./components/Side"
import PlusMinus from "./components/PlusMinus"
import Colors from "./components/Colors"


function App() {
    let color1 = ['red', 'brown', 'green']
    let color2 = ['pink', 'yellow', 'blue']
    let color3 = ['gray', 'lightBlue', 'violet']

    return (
        <div className="App">
            <Colors colors={color1}/>
            <Colors colors={color2}/>
            <Colors colors={color3}/>


        </div>
    );
}

export default App;
