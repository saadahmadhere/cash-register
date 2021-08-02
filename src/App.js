import {useState} from 'react';
import CashGiven from './cashGiven';
import Home from './home';

function App() {

  const [nextClicked, setNextClicked] = useState(false);
  const [bill, setBill] = useState("");
  const [showAlertMessage, setShowAlertMessage] = useState("none")


  const billChange = (e) =>{
    setBill(e.target.value);  
    console.log(typeof e.target.value);
  }

  const nextButtonHandler = () =>{
    if(bill>0){
    setNextClicked(true);
    setShowAlertMessage("none")
  }else{
    setNextClicked(false);
    setShowAlertMessage("flex")
  }
  }
  
  return (
    <div className="App">
      <Home/>
      <label htmlFor="bill">Bill Amount:</label>
      <input id="bill" type="number" value={ bill } onInput={ billChange } autoFocus/>
      {nextClicked ? <CashGiven bill={ bill }/> : <button className="next-btn" onClick={ nextButtonHandler }>Next</button>}
      <div className="alert" style ={{display: `${showAlertMessage}`}} >
        <h2>Enter valid bill amount</h2>
      </div>
    </div>
  );
}

export default App;
