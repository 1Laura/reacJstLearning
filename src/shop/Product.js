function Product({prod, addToCart}) {
    return (
        <div className={'product'}>

            <div className={'image'}>
                <img src={prod.image} alt=""/>
            </div>
            <div>{prod.title}</div>
            <div>{prod.price}</div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product