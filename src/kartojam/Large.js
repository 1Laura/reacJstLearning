function Large({word, len}) {


    return (
        <div>
            <h1>{word.toUpperCase()}</h1>
            {/*paspaudimo metu iskvieciu arrow f-ija  kuri per props len nusiuncia word.lenght*/}
            <button onClick={() => len(word.length)}>{word.length} Send</button>
        </div>
    )
}

export default Large