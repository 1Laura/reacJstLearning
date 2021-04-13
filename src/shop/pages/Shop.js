import Product from "../Product";

function Shop({prods, addToCart}) {
    return (
        <div className={' page'}>
            {prods.map((prod) => <Product
                key={prod.id}
                prod={prod}
                addToCart={()=>addToCart(prod.id)}
            />)}
        </div>
    )
}

export default Shop