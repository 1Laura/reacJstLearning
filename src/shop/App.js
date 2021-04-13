import '../App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";


// create simple web shop page
// there should be three pages - home page, shop page and user cart
// in home page put dummy data, some text and maybe photo
// in shop page you will show all products, each product should have title, price, photo and button
// - when clicked button will add that product to shopping cart
// in shopping cart you show added products in table, each product should have title, price, photo, quantity
// - product quantity can be changed, depending on that total price changes also
// also make global toolbar where you can navigate through pages
// bonus points if in toolbar by shopping card link you will shop number of products in shopping cart

const products = [
    {
        image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
        title: "green chair",
        price: 35.38,
        id: 1,
        quantity: 1
    },
    {
        image: "https://www.barkerandstonehouse.co.uk/images/swatchzoom/TWYFCHAIYELL_1_Zoom.jpg",
        title: "simple chair",
        price: 19.99,
        id: 2,
        quantity: 1
    },
    {
        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
        title: "fotelis chair",
        price: 55,
        id: 3,
        quantity: 1
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
        title: "Boss chair",
        price: 128,
        id: 4,
        quantity: 1
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
        title: "king chair",
        price: 88.25,
        id: 5,
        quantity: 1
    },

]


function App() {

    //state reikalingas tam kad produkta butu galima isideti i cart
    const [cart, setCart] = useState([])

    function addToCart(id) {
        const prod = products.find(x => x.id === id)

        const inCart = cart.filter(x => x.id === id)

        if (inCart.length > 0) {
            const productInCart = products.find(x => x.id === id)
            //pridedu quantity
            productInCart.quantity++
            //isfiltruos cart, ir isims kitus produkctus, kurie nelygus id
            const inCart = cart.filter(x => x.id !== id)
            setCart([...inCart, productInCart])
        } else {
            //prie senos vertes cart[] dedu nauja prod
            setCart([...cart, prod])
            console.log('prod nera')
        }
        console.log(prod);
    }

    function addOrRemove(add, index) {
        const productInCart = cart
        add ? productInCart[index].quantity++ : productInCart[index].quantity--
        if (productInCart[index].quantity < 0) {
            productInCart[index].quantity = 0
        }
        setCart([...productInCart])
    }

    return (
        <Router>
            <div>
                <Navbar
                    cart={cart}
                />
                <div className={'d-flex justify-content-center'}>
                    <Switch>
                        <Route exact path={'/shop'}>
                            <Shop
                                prods={products}
                                addToCart={addToCart}
                            />
                        </Route>
                        <Route exact path={'/cart'}>
                            <Cart
                                cart={cart}
                                evt={addOrRemove}
                            />
                        </Route>

                    </Switch>
                </div>
            </div>

        </Router>
    )
}

export default App