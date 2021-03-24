import '../App.css';
import React, {useState} from "react";
import Quiz from "./Quiz"

function App() {
// example https://aykutsarac.github.io/react-quiz/

// create a quiz app
// user answers questions and gets points for correct ones
// in main component you have only points counter and array with questions
// in child component you have question with answers

    let [getScore, setScore] = useState(0)

    let quiz = [
        {
            question: "Kuriais metais krikštatėvis buvo išleistas pirmą kartą?",
            answers: ['1993', "1852", "1662", "1972"],
            correct: 3
        },
        {
            question: "Kuris aktorius pelnė geriausią aktoriaus Oskarą už filmus „Filadelfija“ (1993) ir „Forrest Gump“ (1994)?",
            answers: ['Jonas Bulijonas', "Tomas Kukuruzas", "Tom Hanks", "Mikas plikas"],
            correct: 2
        },
        {
            question: "Kiek savarankiškų komizionų padarė Alfredas Hitchcockas savo filmuose 1927–1976 metais - 33, 35 ar 37?",
            answers: ['12', "37", "100", "2"],
            correct: 1
        },
        {
            question: "Kuris 1982 m. Filmas buvo labai gerbėjų sutiktas dėl meilės tarp jauno, tėvo neturinčio priemiesčio berniuko ir pasiklydusio, geranoriško bei namuose gyvenančio svečio iš kitos planetos vaizdavimo?",
            answers: ['IR Nežemiškas', "Gelbėtojai", "Terminatorius", "Titanikas"],
            correct: 0
        },
        {
            question: "Kuri aktorė vaidino Mary Poppins 1964 m. Filme „Mary Poppins“?",
            answers: ['Andželina joly', " Julie Andrews", "Karen Gillan", "Lucy Liu"],
            correct: 1
        }
    ]

    function check() {

    }


    return (
        <div className={"d-block m-5"}>
            <div className={"m-5"}>
                <h1>Score: {getScore} </h1>
            </div>
            <div className={""}>
                <Quiz
                    obj={quiz[0]}

                />

            </div>

        </div>
    );
}

export default App;