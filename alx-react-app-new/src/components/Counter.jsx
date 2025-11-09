import { useState } from 'react';

function Counter() {
  // initialize state
  const [count, setCount] = useState(0);

  // component UI
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '8px',
        width: '250px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
