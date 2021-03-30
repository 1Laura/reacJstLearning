import Axios from "axios";

function Comp() {

    return (
        <div>
            <div className={"d-block m-5 text-center"}>
                <button onClick={getJoke}>GET</button>
            </div>


        </div>
    )
}

export default Comp