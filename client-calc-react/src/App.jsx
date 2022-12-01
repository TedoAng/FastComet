import { useState } from 'react';
import styled from '@emotion/styled';
import CircularProgressCustom from './CircleProgress/CircularProgress';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [above, setAbove] = useState(0);
  const [count, setCount] = useState({
    newClients: '',
    currentClients: '',
  });

  const submitResult = (e) => {
    e.preventDefault();

    if (count.newClients && count.currentClients) {
      const result = (count.newClients / count.currentClients) * 100;
      if (result > 100) setAbove(100);
      setResult(result);
    } else if (count.newClients && !count.currentClients) {
      setResult(100);
    } else if (!count.newClients && count.currentClients) {
      setResult(0);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Client Calculator</h2>

        <form onSubmit={(e) => submitResult(e)}>
          <input
            type="text"
            placeholder="New Clients"
            value={count.newClients}
            onChange={(e) => setCount({ ...count, newClients: e.target.value })}
          />
          <input
            type="text"
            placeholder="Old Clients"
            value={count.currentClients}
            onChange={(e) =>
              setCount({ ...count, currentClients: e.target.value })
            }
          />
          <button type="submit">Submit</button>
        </form>

        <div className="btn">
          <p>Percent Capacity - {result.toFixed(2)}%</p>
        </div>
        <div className="diagram">
          <CircularProgressCustom val={above ? above : result} />
        </div>
      </div>
    </div>
  );
}

export default App;
