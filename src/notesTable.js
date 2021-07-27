const NotesTable = ({remainingAmt: change}) => {
    const notes = [2000, 500, 100, 20, 10, 5, 1];
    const numberOfNotes = [0,0,0,0,0,0,0];
    let divisor,quo,iteration;

    while(change>0){
        // divisor = notes.filter(num => (num <= change))
        for(let j=0; j<notes.length; j++){
            if(change >= notes[j]){
                divisor = notes[j];
                iteration = j;
                break;
            }
        }
        quo = Math.trunc(change/divisor);
        numberOfNotes[iteration] = quo;
        change = change%divisor; 
        }

    return ( 
        <div>     
            <table>
                <tbody>
                    <tr>
                        <th>No. of Notes</th>
                        {numberOfNotes.map((cell, index) => (
                            <td className="noOfNotes" key={index}>{cell === 0 ? "": cell }</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Note</th>
                        {notes.map((cell, index) =>(
                            <td key= {index}>{cell}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default NotesTable;
