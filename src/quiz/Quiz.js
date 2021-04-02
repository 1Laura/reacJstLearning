function Quiz({quiz, answer}) {

    return (
        <div>
            <div>
                <h3>{quiz.question}</h3>
            </div>
            <div className={"d-flex"}>
                {
                    //grazinti eventa
                    //onclick metu iskvieciu eventa answer, i answer nusiunciu savo indeksa, kad
                    //zinociau koks atsakymas buvo paspaustas
                    quiz.answers.map((item, index) =>
                        <button key={index} onClick={() => answer(index)}>{item}</button>
                    )
                }
            </div>
        </div>
    );
}

export default Quiz;