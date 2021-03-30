function Card({item,  changeBg, points, score}) {
    let style={
        boxShadow: item.shadow
    }

    console.log(item.counter + points)
    console.log(score)
    return (
        <div className={"caard mx-5"}>
            <h6>{item.text}</h6>
            <button onClick={changeBg} style={{backgroundColor: item.color}}>Send color</button>
            <button onClick={score}>Score {item.counter}</button>
        </div>
    )
}

export default Card
