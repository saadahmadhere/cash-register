import {useState} from 'react';
import CashGiven from './cashGiven';
import Home from './home';

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
      <Home/>
      <label htmlFor="bill">Bill Amount:</label>
      <input id="bill" type="number" value={ bill } onInput={ billChange } autoFocus/>
      {nextClicked ? <CashGiven bill={ bill }/> : <button className="next-btn" onClick={ nextButtonHandler }>Next</button>}
    </div>
  );
}

export default App;
