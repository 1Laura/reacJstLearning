import React from "react"


function Side(props) {

    return (
        <div className="sideBar">
            <div>{props.linkSide}</div>
        </div>
    );
}

export default Side;
