function Comp({cityName, changeName, style, classActive, triggerClass}) {
    let newName = 'Kaunas'
    return (
        // <div className={`d-flex ${classActive ? "borderActive" : ''}`} style={style}>
        <div className={classActive ? "borderActive" : ''} style={style}>
            {cityName}

            <button onClick={() => changeName(newName)}>Change Name</button>
            <button onClick={triggerClass}>Change Border</button>
        </div>
    )
}

export default Comp