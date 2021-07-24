import {useState} from 'react';
import AfterNext from './AfterNext';

function App() {

  const [nextClicked, setNextClicked] = useState(false)

  const billChange = (e) =>{
    console.log(e.target.value)
    
  }

  const nextButtonHandler = () =>{
    setNextClicked(true)
  }
  
  return (
    <div className="App">
      <h1>hello</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <h2>Bill Amount:</h2>
      <input type="text" onChange={billChange}/>
      {nextClicked ? null : <button className="next-btn" onClick={nextButtonHandler}>Next</button>}
      {nextClicked ? <AfterNext/> : null}
     
    </div>
  );
}

export default App;
