function Start({changeScreen}) {

    return (
        <div className="">
            <h1>First menu</h1>
            <div className="btn btn-secondary px-5" onClick={changeScreen}>Start Game</div>
        </div>
    );
}

export default Start;