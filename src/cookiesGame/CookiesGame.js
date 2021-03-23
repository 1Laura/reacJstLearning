import '../App.css';
import Start from "./Start"
import Game from "./Game"
import Shop from "./Shop"
import {useState} from 'react'

function CookiesGame() {
    let [getMoney, setMoney] = useState(500)
    let [getScreen, setScreen] = useState('start')
    let [getUpgrades, setUpgrades] = useState({
        //times yra po kiek clikas prideda tasku, gal geriau uzsivadinti points
        times: 1,
        cookieSpins: false,
        otherCookie: false,
        otherBg: "#ffffff"
    })

    let show

    function upgr(num) {
        const minusMoney = mon => setMoney(getMoney - mon)

        //sutrumpinimas tu vietu kur kartojasi
        const universal = (money, key, value) => {
            if (getMoney >= money) {
                minusMoney(money)
                let up = getUpgrades
                up[key] = value
                setUpgrades(up)
                setScreen("game")
            }
        }

        //labai sutrumpinta versija
        // if (num === 1) universal(100, 'times', 2)

        if (num === 1) {
            universal(100, 'times', 2)
            // if (getMoney >= 100) {
            //     minusMoney(100)
            //     let up = getUpgrades
            //     up.times = 2
            //     setUpgrades(up)
            //     setScreen("game")
            // }
        }
        if (num === 2) {
            universal(200, 'times', 10)
            // if (getMoney >= 200) {
            //     minusMoney(200)
            //     let up = getUpgrades
            //     up.times = 10
            //     setUpgrades(up)
            //     setScreen("game")
            // }
        }
        if (num === 3) {
            universal(100, 'cookieSpins', true)
            // if (getMoney >= 100) {
            //     minusMoney(100)
            //     let up = getUpgrades
            //     up.cookieSpins = true
            //     setUpgrades(up)
            //     setScreen("game")
            // }
        }
        if (num === 4) {
            universal(200, 'otherCookie', true)
            // if (getMoney >= 200) {
            //     minusMoney(200)
            //     let up = getUpgrades
            //     up.otherCookie = true
            //     setUpgrades(up)
            //     setScreen("game")
            // }
        }
        if (num === 5) {
            universal(100, 'otherBg', "#efeecf")
            // if (getMoney >= 100) {
            //     minusMoney(100)
            //     let up = getUpgrades
            //     up.otherBg = "#efeecf"
            //     setUpgrades(up)
            //     setScreen("game")
            // }
        }

        console.log(num);
    }

    {
        if (getScreen === 'start') {
            show =
                <Start
                    changeScreen={() => setScreen('game')}
                />
        }

        if (getScreen === 'game') {
            show =
                <Game
                    money={getMoney}
                    spin={getUpgrades.cookieSpins}
                    otherCookie={getUpgrades.otherCookie}
                    changeScreen={() => setScreen('shop')}
                    addMoney={() => setMoney(getMoney + getUpgrades.times)}
                />
        }

        if (getScreen === 'shop') {
            show =
                <Shop
                    changeScreen={() => setScreen('game')}
                    upgrade={upgr}
                />
        }
    }


    return (
        <div className="d-flex justify-content-center text-center my-2" style={{backgroundColor: getUpgrades.otherBg}}>
            {show}
            {/*{getScreen === 0 ? (<Start/>) : null}*/}
            {/*{getScreen === 1 ? (*/}
            {/*    <div className="">*/}
            {/*        <h2 className="text-center">{getMoney}</h2>*/}
            {/*        <Game/>*/}
            {/*    </div>*/}
            {/*) : null}*/}
            {/*{getScreen === 2 ? (*/}
            {/*    <div>*/}
            {/*        <Shop/>*/}
            {/*    </div>*/}
            {/*) : null}*/}


        </div>
    );
}

export default CookiesGame;
