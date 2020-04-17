import React, { ReactElement } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const headers = ['A conga a day keeps the doctor away', 'You call that a conga? This is a conga', 'Conga on, conga off', "You can't handle the conga", 'Carry on my wayward conga', 'Stop, drop and conga', "I've got a lovely bunch of conganuts", "Conga like it's 1999", 'Is that a conga in your pocket or are you just happy to see me?']
const header = headers[Math.floor(Math.random() * headers.length)];

const App = (): ReactElement => {
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
        <h1>{header}</h1>
        <h3>Money rinsed on current day rate:</h3>
        <h3>{formatter.format(salary)}</h3>
        <h3>Number of times he's broken prod:</h3>
        <h3>1</h3>
      </header>
    </div>
  );
}

export default App;
