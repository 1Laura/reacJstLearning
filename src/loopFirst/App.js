import '../App.css';
import React, {useState} from "react";
import Loop from "./Loop"

function App() {
    let comments = [
        'suo labradoras',
        'reikia siurblio',
        'transportavimui',
        'ir daug daug visko'
    ]

    return (
        <div className={"Loop text-center"}>
            {
                comments.map((item, index) =>
                    <Loop
                        key={index}
                        comment={item}
                    />)
            }

            {/*<Loop*/}
            {/*comment={'kaip sekas?'}*/}
            {/*/>*/}
        </div>
    );
}

export default App;