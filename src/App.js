import {useState} from 'react';
import AfterNext from './AfterNext';

function App() {

  const [nextClicked, setNextClicked] = useState(false);
  const [bill, setBill] = useState("");

  const billChange = (e) =>{
    setBill(e.target.value);  
  }

  const nextButtonHandler = () =>{
    setNextClicked(true)
  }
  
  return (
    <div className="App">
      <h1>hello</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <h2>Bill Amount:</h2>
      <input type="text" value={bill} onInput={billChange}/>
      {nextClicked ? <AfterNext bill={bill}/> : <button className="next-btn" onClick={nextButtonHandler}>Next</button>}
     
    </div>
  );
}

export default App;
