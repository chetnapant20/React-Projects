import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tabs-project'
import Data from './Data'
function App() {
 const [ load, setLoad] =useState(true);
 const [object, setObject] =useState(0)
 useEffect(()=>
{setTimeout(()=>{setLoad(false)},2000)},[])


function show(){
 return <article className="job-info">
  <h3>{Data[object].title}</h3>
  <h4>{Data[object].company}</h4>
  <div className="job-date">{Data[object].dates}</div>
  <br />
  <div>
    {Data[object].duties.map((text) => (
      <div className="job-desc">
        <span className="job-icon">
          <FaAngleDoubleRight />
        </span>
        <p>{text}</p>
      </div>
    ))}
  </div>
</article>;
}

  return (
    <section className="section">
      {load ? (
        <h1 className="loading">Loading.....</h1>
      ) : (
        <div className="jobs-center">
          <div className="bnt-container">
            <button
              className={`job-btn ${object === 0 && "active-btn"}`}
              onClick={() => setObject(0)}
            >
              TOMMY
            </button>

            <button
              className={`job-btn ${object === 1 && "active-btn"}`}
              onClick={() => setObject(1)}
            >
              BIGDROP
            </button>

            <button
              className={`job-btn ${object === 2 && "active-btn"}`}
              onClick={() => {
                setObject(2);
              }}
            >
              CUKER
            </button>
          </div>
          {show()}
        </div>
      )}
    </section>
  );
}

export default App
