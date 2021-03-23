function Card({item, style, changeBg}) {

    return (
        <div className={"caard mx-5"}>
            <h6>{item.text}</h6>
            <button onClick={() => changeBg(style)} style={{backgroundColor: style}}>Send color</button>
            <button>Score</button>
        </div>
    )

}

export default Card
