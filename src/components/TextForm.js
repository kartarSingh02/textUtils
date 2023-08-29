import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase has been clicked" +  text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    // if user change the value at that time text will be changed using event listner and setText will update the text value to the latest one
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = () =>{
        // let newText = text('');
        setText('');
    }

    const handleCopy = () =>{
        // var text=document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
    }
    // we can pass any string or value default but for the user it should be clear
    // const [text, setText]=useState('Enter text here');

    const [text, setText]=useState('');

    // text="adas" - this is the wrong way to update the text
    // setText("New text") - correct way to change the state 
    return (
        <>
        <div className="container" style={{ color:props.mode ==='dark'?'white':'#03010c',}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode ==='dark'?'#212529':'white', color:props.mode ==='dark'?'white':'black' }} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{ color:props.mode ==='dark'?'white':'#03010c',}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length } words and {text.length} charachters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes will take to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter krle bhai upr dibbe me tbhi yaha dekhiyo'}</p>
        </div>
        </>
    )
}
