import React, { useEffect, useState } from 'react';
import data from './data';
import { use } from 'react';
function App() {
  
  const [value, setValue] =useState(0);
  const[show, setShow] = useState(0)
  const [text, setText] =useState([])

  useEffect(()=>{
    setText(data.slice(0,show))
  },[show])

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>

      <form className="lorem-form">

        <label>paragraphs:</label>

        <input name='num' type='number' min='1' max='8' onChange={(e)=>{
          let num = parseInt(e.target.value)
          if(num<1) num=1
          if(num>8) num=8
          setValue(num)}}></input>
        <button className='btn'onClick={(e)=>{
          e.preventDefault()
          setShow(value)}}>generate</button>

      </form>


      <div className='result'>
        {
          text.map((e,index)=><p key={index}>{e}</p>)
        }
      </div>
    </section>
  );
}

export default App;
