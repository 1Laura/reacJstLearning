function Quiz({obj}) {

    return (
        <div>
            <div>
                <h3>{obj.question}</h3>
            </div>
            <div className={"d-flex"}>
                {
                    obj.answers.map((item, index) => {
                        return (
                            <div>
                                <button key={index}>{item}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Quiz;