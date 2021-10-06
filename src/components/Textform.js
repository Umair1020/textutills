import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("converted to uppercase!","success");
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to Lower!","success");
    }
    const handleclearClick = () => {
        let newtext = ""
        setText(newtext)
    }
    // const handleshClick = () => {
    //     let newtext = text.to
    //     setText(newtext)
    // }
    const handleonClick = (event) => {
        console.log("on click")
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1 className="text-info">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleonClick} id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black', }} id="mybox" value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Change to Uppercase</button><br />
                <button className="btn btn-primary my-2" onClick={handleLoClick}>Change to Lowercase</button><br />
                <button className="btn btn-primary " onClick={handleclearClick}>Clear</button>
                {/* <button className="btn btn-primary mx-3" onClick={handleshClick}>show/hide</button> */}
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something into the textbox above to preview here"}</p>
            </div>
        </>
    )
}
