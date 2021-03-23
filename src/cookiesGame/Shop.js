function Shop({changeScreen, upgrade, add10}) {
    // upgrades
// click adds 2 points - cost 200
// click adds 10 points - cost 500
// cookie spins - 600
// change cookie image - 1000
// change page background color - 200
// not upgrades
// try setting score to local storage ant retrieving it

    return (
        <div>
            <h1 className="text-center">Shop</h1>
            <div className="d-flex align-items-center flex-column">
                <div onClick={()=>upgrade(1)} className="btn btn-secondary m-2">click adds 2 points - cost 100</div>
                <div onClick={()=>upgrade(2)} className="btn btn-secondary m-2">click adds 10 points - cost 200</div>
                <div onClick={()=>upgrade(3)} className="btn btn-secondary m-2">cookie spins - 100</div>
                <div onClick={()=>upgrade(4)} className="btn btn-secondary m-2">change cookie image - 200</div>
                <div onClick={()=>upgrade(5)} className="btn btn-secondary m-2">change page background color - 100</div>

            </div>
            <div className="d-flex justify-content-center m-5">
                <div className="btn btn-secondary" onClick={changeScreen}>Go to Game Page</div>
            </div>
        </div>
    );

}

export default Shop;