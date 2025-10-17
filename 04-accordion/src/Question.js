import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = (single) => {
  const [infor , setInfo] = useState(false)


  return (
    <>
      <div className='question'>
      <header>

        <h4>{single.title}</h4>
        <button className="btn" onClick={() => setInfo(!infor)}>
          {infor ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {infor ? <p>{single.info}</p> : null}
      </div>
    </>
  );
};

export default Question;
