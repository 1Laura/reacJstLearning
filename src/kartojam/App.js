import '../App.css'
import Comp from './Comp'
import Large from './Large'
import {useState} from "react";

function App() {
    // let cityName = 'Vilnius' paprastas kintamasis nesiupdatina
    let [getCity, setCity] = useState('Vilnius')
    //setBorder yra metodas
    let [getBorder, setBorder] = useState(true)

    let styleCombine = {
        backgroundColor: "#7af837",
        padding: "10px"
    }
    let arr = [
        'labas',
        'kaip sekas?',
        'negerai',
        'o tau kaip?',
        'laukiu pavasario'
    ]

    //sutrumpinom -> Comp iskvietime
    // function changeName(name) {
    //     return setCity(name)
    // }

    function log(num) {
        console.log(num)
    }

    return (
        <div className={"d-block m-5 text-center"}>
            <Comp
                style={styleCombine}
                classActive={getBorder}
                cityName={getCity}
                //set border paima reiksme ir apvercia
                //vienos linijos f-ija i {}
                triggerClass={() => setBorder(!getBorder)}
                // changeName={changeName}
                //arrow f-ija grazina name, viduje funkcija iskviecia setCity metoda,
                // atsiunciu ta name, kur atejo is change name per argumentus
                changeName={(name) => setCity(name)}
            />

            {
                //map turi grazinti comp i kuri as siunciu tuos duomenis
                // arrow f-ija
                // po strelytes yra automatiskai returninimas
                arr.map((item, index) =>
                    <Large
                        //key index uzdeti cia, ne componente
                        key={index}
                        word={item}
                        len={log}
                    />)
            }
        </div>
    )
}

export default App