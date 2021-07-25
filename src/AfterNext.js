import { useState } from "react";

const AfterNext = ({bill}) => {
   
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
        <input type="text" onInput={cashHandler} />
        
        <button className="next-btn" onClick={checkButtonHandler}>Check</button>
        {checkClicked ? (remainingAmt>=0 ?
                          <div>remaining amount={remainingAmt}</div> 
                                          :<div>
                                                <p>Cash is less than bill, please enter the right amount.</p>
                                           </div>) 
                      :null }
         <table>
            <tbody>
               <tr>
                  <th>No.of Notes</th>
                  <td className="noOfNotes"></td>
                  <td className="noOfNotes"></td>
                  <td className="noOfNotes"></td>
                  <td className="noOfNotes">2</td>
                  <td className="noOfNotes"></td>
                  <td className="noOfNotes">1</td>
                  <td className="noOfNotes"></td>
               </tr>
               <tr>
                  <th>Note</th>
                  <td>2000</td>
                  <td>500</td>
                  <td>100</td>
                  <td>20</td>
                  <td>10</td>
                  <td>5</td>
                  <td>1</td>
               </tr>
            </tbody>
         </table>
     </div> );
}
 
export default AfterNext;