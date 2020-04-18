import React, { ReactElement } from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});

const headers = [
  'A Conga a day keeps the doctor away',
  'You call that a Conga? This is a Conga',
  'Conga on, Conga off',
  "You can't handle the Conga",
  'Carry on my wayward Conga',
  'Stop, drop and Conga',
  "I've got a lovely bunch of Conganuts",
  "Conga like it's 1999",
  'Is that a Conga in your pocket or are you just happy to see me?',
  'May the Conga be with you',
  "There's no place like Conga",
  'Conga, my dear Watson',
  "My mama always said life was like a box of chocolates. You never know what Conga you're gonna get",
  "You're gonna need a bigger Conga",
  'Conga, we have a problem',
  'The first rule of Conga club is you do not talk about Conga club',
  'They call it a Conga with cheese',
  'I wish I knew how to Conga you',
  "Help me, Obi-Wan Kenobi. You're my only Conga",
  'Conga, not stirred',
  "What we've got here is a failure to Conga",
  'Say hello to my little Conga!',
  'I love the smell of Conga in the morning',
  'Leave the gun. Take the Conga.',
  "I am serious. And don't call me Conga.",
  "Here's Conga!",
  'You had me at Conga',
  'Conga. James Conga.',
  "Frankly my dear, I don't give a Conga"
];

const header = headers[Math.floor(Math.random() * headers.length)];

const App = (): ReactElement => {
  const [salary, setSalary] = useState(new Date().getTime() / 100);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSalary(new Date().getTime() / 100);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [salary]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{header}</h1>
        <h3>Money rinsed on current day rate:</h3>
        <h3>{formatter.format(salary)}</h3>
        <h3>Number of times he's broken prod:</h3>
        <h3>1</h3>
      </header>
    </div>
  );
};

export default App;
