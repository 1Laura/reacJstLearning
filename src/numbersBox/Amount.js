function Amount({addNum, sum}) {

    return (
        <div>
            <button onClick={() => addNum(sum)}>{sum}</button>
        </div>
    )
}

export default Amount;