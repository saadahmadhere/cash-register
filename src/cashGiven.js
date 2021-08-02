import { useState } from "react";
import NotesTable from './notesTable';

const CashGiven = ({ bill }) => {
   
   const [cash, setCash] = useState("");
   const [checkClicked, setCheckClicked] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");

   const remainingAmt = Number(cash)-Number(bill);

   const cashHandler = (e) =>{
      setCash(e.target.value)
   }

   const checkButtonHandler = () =>{
      
      // console.log({Number(cash),Number(bill)})
      if(Number(cash) > 0 && Number(bill) > 0 && !isNaN(cash)){
         
         if(Number(cash) === Number(bill)){
            setAlertMessage("No cash needs to be returned.")
         }else{
            setCheckClicked(true)
            setAlertMessage("")
         }
      }else{
         setCheckClicked(false)         
         setAlertMessage("Enter valid bill amount and cash given to continue")
      }
   }

    return ( 
     <div className="after-next">
        <label htmlFor="cash">Cash Given</label>
        <input id="cash" type="number" onInput={cashHandler} />
        <button className="next-btn" onClick={checkButtonHandler}>Check</button>
        {checkClicked ? (remainingAmt>=0 ?
                                          <NotesTable remainingAmt={ remainingAmt }/>
                                          :<div>
                                                <p>Cash is less than bill, please enter the right amount.</p>
                                           </div>) 
                      :null }
         <div className="alert" style = {{display: alertMessage ? "flex" : "none"}}>
            <p>{alertMessage}</p>
         </div>
     </div> );
}
 
export default CashGiven;