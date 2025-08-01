import React, { useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count > 0){
            setCount( c => c -1);
            setCount( c => c -1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    const increment = () => {
        setCount( prevCount  => prevCount + 1);
        setCount( prevCount  => prevCount + 1);
        setCount( prevCount  => prevCount + 1);
    }

    return(
        <div className='counter'>
            <h1 className='title'>{count}</h1>
            <div className='buttons'>
                <button className='btn' onClick={decrement}>Decrement</button>
                <button className='btn' onClick={reset}>Reset</button>
                <button className='btn' onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter