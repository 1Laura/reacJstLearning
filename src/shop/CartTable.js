function CartTable({cart, evt}) {

    function count() {
        let counter = 0
        cart.map(item => {
            counter += item.quantity * item.price
        })
        return counter
    }


    return (
        <div>
            {
                cart.length > 0 ? cart.map((prod, index) => {
                    return <div className={'table'} key={prod.id}>
                        <div>
                            <img src={prod.image} alt=""/>
                        </div>
                        <div>
                            <div>{prod.title}</div>
                            <div>{prod.price}</div>
                        </div>
                        <div>
                            <button onClick={() => evt(true, index)}>Add</button>
                            <div>
                                {prod.quantity}
                            </div>
                            <button onClick={() => evt(false, index)}>Remove</button>
                        </div>
                    </div>
                }) : null
            }
            <div>SUM: {count()}</div>
        </div>


    )
}

export default CartTable