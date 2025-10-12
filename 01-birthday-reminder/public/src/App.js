import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [value, setValue] =useState(data);
  return (
    <main>
      <div className="container">
        <h3>{value.length} birthdays today</h3>
        {value.map((person) => (
          <List key={person.id} person={person} />
        ))}
        <button onClick={()=>setValue([])}>clear all</button>
      </div>
    </main>
  );
}

export default App;
