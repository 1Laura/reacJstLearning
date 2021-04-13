import {Link} from "react-router-dom";

function Navbar({cart}) {
    function countCart(items) {
        let counter = 0
        items.map(item => {
            counter += item.quantity
        })
        return counter

    }

    return (
        <div className={'navbar m-5 '}>
            <div>
                <img src="https://i.picsum.photos/id/553/70/70.jpg?hmac=z-FwKGnx_oK78C--BQmEPhQd-jg28-0VDXxpT7Dnx_g"
                     alt=""/>
            </div>
            <div>
                <Link to={'/shop'}>SHOP </Link>
                <Link to={'/cart'}>CART ({countCart(cart)}) </Link>
            </div>
        </div>
    )
}

export default Navbar