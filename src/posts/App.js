import '../App.css';

import React, {useState} from "react";

function App() {
    //getPosts tuscias masyvas
    let [getPosts, setPosts] = useState([])
    let [getInput, setInput] = useState({photo: "", text: ""})


    function updateInputs(e) {
        //galima ir sitaip
        let photo = document.getElementById('photo').value
        let text = document.getElementById('text').value
        setInput({photo, text})

        // let thing = {...getInput}
        // if (e.target.id === 'photo') {
        //     thing.photo = e.target.value
        // }
        // if (e.target.id === 'text') {
        //     thing.text = e.target.value
        // }
        // console.log(thing)
        // setInput(thing)
        // // console.log(e.target.value)
    }

    function addPost() {
        // thing = {}
        // console.log(getInput)
        //susjungiu sena array su duomenim, ir idedu nauja posta
        //ant setPost negalima naudoti push, nes cia yra metodas
        setPosts([...getPosts, getInput])
    }

    function deletePost(index) {
        // console.log(index)
        let arr = getPosts
        //grazina tuos index is postu arr kurie nesutampa su mano paspaustu indeksu, kuri atsiunciu
        //ind kiekvieno elemento indeksas
        //filter issima elementus
        arr = arr.filter((item, ind) => ind !== index)
        setPosts(arr)
    }

    return (
        <div>
            <div className={"mt-5 d-flex justify-content-center"}>
                <div className={"wrapper align-items-center"}>
                    <div className={"input-group mb-3"}>
                        <span className={"input-group-text"}>Img url</span>
                        <input onChange={updateInputs} type="text" className={"form-control"} id="photo"
                               aria-describedby="basic-addon3"/>
                    </div>
                    <div className={"input-group mb-3"}>
                        <span className={"input-group-text"}>Text</span>
                        <input onChange={updateInputs} type="text" className={"form-control"} id="text"
                               aria-describedby="basic-addon3"/>
                    </div>
                    <div className={"input-group justify-content-center mb-3"}>
                        <button onClick={addPost} type="button" className={"btn btn-outline-dark"}>Add</button>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-center"}>
                {
                    getPosts.map((post, index) => {
                        return (
                            <div style={{border: '2px orange solid', width: '18rem'}} className={"card m-2 cardStyle"}
                                 key={index}>
                                <img src={post.photo} alt=""/>
                                <p className={"p-3"}>{post.text}</p>
                                <button onClick={() => deletePost(index)} type="button"
                                        className={"btn btn-outline-dark"}>Delete
                                </button>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    );
}

export default App