import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';


function App() {
  const [category, setCategory] =useState('all')

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button className="filter-btn" onClick={() => setCategory("all")}>
            all
          </button>
          <button
            className="filter-btn"
            onClick={() => setCategory("breakfast")}
          >
            breakfast
          </button>
          <button className="filter-btn" onClick={() => setCategory("lunch")}>
            lunch
          </button>
          <button className="filter-btn" onClick={() => setCategory("shakes")}>
            shakes
          </button>
        </div>

        <Categories category={category}></Categories>
      </section>
    </main>
  );
}

export default App;
