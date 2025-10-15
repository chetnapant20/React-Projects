import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const peopleLength = people.length;

  function next(){
     setIndex((index + 1) % peopleLength);}

  function prev(){
      setIndex((index-1+peopleLength)%peopleLength)}
  

  function random(){
    setIndex(Math.floor(Math.random() * people.length));
  }
  
  return (
    <article className="review">

      <div className="img-container">
        <img className="person-img" src={people[index].image} />
        <div className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </div>
      </div>
      
      <h4 className='author'>{people[index].name}</h4>
      <div className='job'>{people[index].job}</div>
      <p className='info'>{people[index].text}</p>

      <div className='btn-container'>
      <button className='prev-btn' onClick={prev}><FaChevronLeft/></button>

      <button className='next-btn' onClick={next}><FaChevronRight/></button>
      </div>

      <button className='random-btn' onClick={random}>Suprise me</button>
    </article>
  );
};

export default Review;
