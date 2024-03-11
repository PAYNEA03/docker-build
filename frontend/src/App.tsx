import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [checked, setChecked] = useState(false);

  let backend_url = process.env.REACT_APP_BACKEND_URL || ""

  useEffect(() => {
      if (checked && backend_url) {
        fetch(backend_url, {
            mode: 'cors',
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
          .then((response) => response.text())
          .then(setData);
    }
  }, [checked]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <section>
            <p>Data: {data}</p>
            <button onClick={() => setChecked((checked) => !checked)}>Fetch Data</button>
        </section>
      </header>
    </div>
  );
}

export default App;
