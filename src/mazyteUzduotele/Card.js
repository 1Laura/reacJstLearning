function Card({item, changeBg, addCounter}) {
    let style = {
        boxShadow: item.shadow ? "10px 10px 5px -7px rgba(0,0,0,0.75)" : null,
        border: item.border ? "2px solid black" : null,
    }

    return (
        <div className={`caard mx-2 ${item.class}`} style={style}>
            <h6>{item.text}</h6>
            <button onClick={() => changeBg(item.color)}
                    style={{backgroundColor: item.color}}>Click me
            </button>
            {/*                    props       parametras, kuri nusiunciam*/}
            <button onClick={()=>addCounter(item.counter)}>Add {item.counter}</button>
        </div>
    )
}

export default Card
