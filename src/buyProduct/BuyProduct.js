import '../App.css';
import ProductCard from "./ProductCard"
import {useState} from 'react'

function BuyProduct() {
// create 3 cards
// each of car should have image price title and color used
// in card should be buy button on click you buy this product so price are subtract from total money
// also when item is clicked its name shown in parent component as example  "Cat Eye Sun glasses was bought"

    let items = [
        {
            photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26114711/Shiba-Inu-standing-in-profile-outdoors.jpg",
            price: '5.55',
            name: "Shiba Inu",
            color: 'red'
        },
        {
            photo: "https://www.bewooden.com/picture/5d1ce293a3a7c/w960/0-geomess-socks.jpg",
            price: '9.30',
            name: "Some socks",
            color: 'blue'
        },
        {
            photo: "https://asia-latinamerica-mea.yamaha.com/en/files/Image-index_FGX5_1080x1080_aa7e454b503b8f8b1c5f1127daa1f3ac.jpg?impolicy=resize&imwid=396&imhei=396",
            price: "25.99",
            name: "Rock guitar",
            color: "yellow"
        }
    ]

    let [getPrice, setPrice] = useState(500)
    let [getTitle, setTitle] = useState('')

    function subtract(sum, title) {
        setPrice((getPrice - sum).toFixed(2))
        setTitle(`${title} was bought`)
    }

    return (
        <div className="justify-content-center my-2">

            <h1 className="text-center">{getPrice}</h1>
            <h3 className="text-center">{getTitle}</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
                <ProductCard
                    changeMoney={subtract}
                    title={items[0].name}
                    sum={items[0].price}
                    img={items[0].photo}
                />
                <ProductCard
                    changeMoney={subtract}
                    title={items[1].name}
                    sum={items[1].price}
                    img={items[1].photo}
                />
                <ProductCard
                    changeMoney={subtract}
                    title={items[2].name}
                    sum={items[2].price}
                    img={items[2].photo}
                />
            </div>
        </div>
    );
}

export default BuyProduct;


