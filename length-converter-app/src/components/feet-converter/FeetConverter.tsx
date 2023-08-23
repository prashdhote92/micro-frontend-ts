import React from "react";
import "./FeetConverter.css"

class FeetConverter extends React.Component {
    render() {
        return (
            <>
                <h2>Feet Converter</h2>
                <span className="main_input">
                    <label>Length: </label>
                    <input type={"text"}></input>
                </span>
            </>
        )
    }
}

export default FeetConverter;