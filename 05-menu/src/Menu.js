import React from 'react';

const Menu = (item) => {
  
  return (
    <article className='menu-item'>
      <img className="photo" src={item.img}></img>
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <span className="price ">$ {item.price}</span>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
};

export default Menu;
