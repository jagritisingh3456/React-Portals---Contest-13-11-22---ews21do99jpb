import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [inputValue,setInputValue] = useState("");
  const [textAreaValue,setTextAreaValue] = useState("");
  
  const handleInput = (e)=>{
    setInputValue(e.target.value);
  }

  const buttonclick =()=>{
    setTextAreaValue(inputValue);
    setInputValue("");
  }

  return (
    
    <div id="main">
      <input id="input" value={inputValue} onChange={handleInput}></input><br/>
      <PortalButton buttonclick={buttonclick} /><br/>
      <PortalTextArea value={textAreaValue}/>
    </div>
  )
}


export default App;
