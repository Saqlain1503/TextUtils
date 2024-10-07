import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
        <div className="conatiner my-3">
            <h1>Your Text</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </> 
  )
}
     