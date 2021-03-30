function Comp({cityName, changeName, style, classActive, triggerClass}) {
    let newName = 'Kaunas'
    return (
        <div className={classActive ? "borderActive" : ''} style={style}>
            {cityName}
            {/*f-ija i kuria issiunciu argumenta*/}
            <button onClick={() => changeName(newName)}>Change Name</button>
            <button onClick={triggerClass}>Change Border</button>
        </div>
    )
}

export default Comp