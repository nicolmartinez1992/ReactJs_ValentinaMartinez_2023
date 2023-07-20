import React from "react";
import "./index.css"

const Title = (props) => {
    console.log(props)
    return (
        <div className="titleContainer">
            <h1 className="title">{props.greeting}</h1>
        </div>
    )
}

export default Title; 