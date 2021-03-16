function Amount(props) {

    return (
        <div>
            <button onClick={() => props.addNum(props.sum)}>{props.sum}</button>
        </div>
    )
}

export default Amount;