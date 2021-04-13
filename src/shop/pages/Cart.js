import CartTable from '../CartTable'

function Cart({cart, evt}) {
    return (
        <div>
            <CartTable
                cart={cart}
                evt={evt}
            />
        </div>
    )
}

export default Cart