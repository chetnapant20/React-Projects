import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <article >{data.map((single)=><SingleQuestion key={single.id} {...single}></SingleQuestion>)}</article>
      </section>
    </main>
  );
}

export default App;
