import React,{useState}from 'react';

function Counter(){
    const [number,setNumber] = useState(2);

    const onIncrease = () =>{
        setNumber(preNumber => preNumber *2)
    }
    const onDecrease = () =>{
        setNumber(preNumber => preNumber /2)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>up</button>
            <button onClick={onDecrease}>down</button>
        </div>
    )
}
export default Counter;