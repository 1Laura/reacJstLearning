function Addition() {

    return (
        <div className={"m-5"}>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"} id={"basic-addon3"}>Img url</span>
                <input type={"text"} className={"form-control"} id={"url"} aria-describedby={"basic-addon3"}/>
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"} id={"basic-addon3"}>Text</span>
                <input type={"text"} className={"form-control"} id={"text"} aria-describedby={"basic-addon3"}/>
            </div>
        </div>
    )
}

export default Addition