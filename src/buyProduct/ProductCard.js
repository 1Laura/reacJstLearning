function ProductCard(props) {

    return (
        <div className="col">
            <div className="card h-100 ">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className="card-footer d-flex justify-content-center">

                    <div className="btn btn-secondary px-5"
                         onClick={() => props.changeMoney(props.sum, props.title)}>{props.sum}</div>

                </div>
            </div>
        </div>

    );
}

export default ProductCard;