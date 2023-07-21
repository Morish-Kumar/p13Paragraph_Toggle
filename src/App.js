import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
const [showParagraph, setShowParagraph] = useState(false)

console.log('APP RUNNING')
// consoling just to prove that the component is re-evaluated whewn the state or props changes

const toggleParagraphHandler =() =>{
  setShowParagraph((prevShowparagraph) => !prevShowparagraph)
}



  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is a new Para</p>} */}
      <DemoOutput show={showParagraph}/>
      {/* <DemoOutput show={false}/>  */}
      {/* above statement is to show that when the parent component is not re-executed and re-evaluated the child component is also not re-rendered */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button>Hide paragraph</Button>
    </div>
  );
}

export default App;
