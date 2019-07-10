import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>This is My Heading</h1>
      <h3>This is My Paragraph</h3>
      <Person name="Abhishek" age="26">My Hobbies: Playing and Sleeping</Person>
      <Person name="Deepak" age="24"></Person>
      <Person name="Tarun" age="25"></Person>
    </div>
  );
}

export default App;
