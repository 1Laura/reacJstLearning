function Card({item}) {

    let style = {
        backgroundColor: item.color
    }
    return (
        <div className={"border"} style={style}>
            <h4>{item.task}</h4>
            <p>{item.time.toString()}</p>
        </div>
    )
}

export default Card