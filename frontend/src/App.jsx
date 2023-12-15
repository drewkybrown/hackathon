import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("localhost:5000")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setData(null);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from Backend="App-header"</p>
      </header>
    </div>
  );
}

export default App;
