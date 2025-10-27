'use client';
import { useState } from 'react';

export default function Counter ({initialCount = 0, initialStep =1}) {
    const [count, setCount] = useState(initialCount);
    const [step,setStep ] = useState(initialStep);

    return (
        <div>
            <p aria-live="polite">Current Count: {count}</p>
            <br />
            <button onClick={() => setCount(count +1)}>Plus One</button>
      <br></br>
      <br></br>
        <button id="Minus one" onClick={() => setCount(count -1)}>Minus One</button> 
        <br />
        <br />
        <button id="reset" onClick={() => setCount(0)}>Reset Counter</button> 
        <br />
        <p>Enter a custom amount:</p>

        <input 
        id="step"
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)} />
        
        <button onClick={() => setCount(count => +count + +step)}>Add custom amount</button> 
        <br />
        <br />
        <button onClick={() => setCount(count => count - step)} disabled={count-step < 0}>Subtract custom amount</button> 

        </div>
    );
}



