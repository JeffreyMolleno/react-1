import React,{useState} from 'react'

export default function Sum() {

    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    function solve(input) {

        let res = 0;
        
        input.split(',').map(data=>res+= parseInt(data));

        setResult(res);
    }

    return (
        <div className="puzzleBox sumPB">
            <h4> Sum </h4>

            <input className="inputLine" onChange={e=>setUserInput(e.target.value)}></input>
            
            <button className="confirmationButton" onClick={()=>solve(userInput)}> Add </button>
    <span className="resultsBox"> {result}</span>
      </div>
    )
}
