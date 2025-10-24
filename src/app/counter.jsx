'use client';
import { useState } from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Count: {count}</p>
            <br />
            <button onClick={() => setCount(count +1)}>Plus One</button>
      <br></br>
      <br></br>
        <button id="Minus one" onClick={() => setCount(count -1)}>Minus One</button> 
        <br />
        <br />
        <button id="reset" onClick={() => setCount(0)}>Reset Counter</button> 
        <br />
        </div>
    );
}


