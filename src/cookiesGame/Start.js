function Start(props) {
    return (
        <div className="buttonColor">
            <button onClick={() => props.changeName('Andrius')}>Click</button>
        </div>

    );
}


export default Start;