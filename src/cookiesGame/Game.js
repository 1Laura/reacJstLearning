function Game({changeScreen, money, addMoney, spin, otherCookie}) {
    let img = [
        "https://i.redd.it/5e7cf6b1nfy01.png",
        "https://pngimg.com/uploads/cookie/cookie_PNG13645.png"
    ]

    return (
        <div className="my-2">
            <h1>{money}</h1>
            <div className="d-flex justify-content-center">
                <img onClick={addMoney}
                     className={spin ? "cookieSpin" : ""}
                     src={otherCookie ? img[1] : img[0]} alt=""/>
            </div>

            <div className="d-flex justify-content-center">
                <div className="btn btn-secondary" onClick={changeScreen}>Go to Shop</div>
            </div>
        </div>
    );
}

export default Game;
