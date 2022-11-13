import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpperClick = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert("Converted to upperCase", "success")
        } else props.showAlert("Please enter some text.", "warning")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLowerClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase()
            setText(newText)
            props.showAlert("Converted to lowerCase successfully.", "success")
        } else props.showAlert("Please enter some text.", "warning")
    }
    const clearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Window cleared successfully.", "success")
    }

    const handleCopy = () => {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to clipboard successfully.", "success")
    }
    const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra space removed successfully.", "success")
    }


    return (
        <>
            <div className='contianer1' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="6"></textarea>
                </div>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1 " onClick={handleUpperClick} >Convert to UpperCase</button>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1" onClick={handleLowerClick} >Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText} >Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container2 my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview as well as to active buttons."}</p>
            </div>
        </>
    )
}
