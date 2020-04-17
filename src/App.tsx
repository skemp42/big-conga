import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

 
  const [salary, setSalary] = useState(new Date().getTime() / 100000);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSalary(salary + (new Date().getTime() / 10000000000));
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [salary]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>I fucking love big conga</h1>
        <h3>Money rinsed on current day rate:</h3>
        <h3>{formatter.format(salary)}</h3>
        <h3>Number of times hes broken prod:</h3>
        <h3>1</h3>
      </header>
    </div>
  );
}

export default App;
