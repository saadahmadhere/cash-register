import { useState } from "react";
import NotesTable from './notesTable';

const CashGiven = ({bill}) => {
   
   const [cash, setCash] = useState("");
   const [checkClicked, setCheckClicked] = useState(false);
   const remainingAmt = cash-bill;

   const cashHandler = (e) =>{
      setCash(e.target.value)
   }

   const checkButtonHandler = () =>{
      setCheckClicked(true)
   }

    return ( 
     <div className="after-next">
        <h2>Cash Given:</h2>
        <input type="number" onInput={cashHandler} autoFocus/>
        
        <button className="next-btn" onClick={checkButtonHandler}>Check</button>
        {checkClicked ? (remainingAmt>=0 ?
                                          <NotesTable remainingAmt={remainingAmt}/>
                                          :<div>
                                                <p>Cash is less than bill, please enter the right amount.</p>
                                           </div>) 
                      :null }
     </div> );
}
 
export default CashGiven;