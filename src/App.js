import {useState} from 'react';
import CashGiven from './cashGiven';

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
      <h1>Cash Register Manager</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <h2>Bill Amount:</h2>
      <input type="number" value={bill} onInput={billChange} autoFocus/>
      {nextClicked ? <CashGiven bill={bill}/> : <button className="next-btn" onClick={nextButtonHandler}>Next</button>}
     
    </div>
  );
}

export default App;
