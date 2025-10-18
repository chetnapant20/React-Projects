import React from 'react';
import items from "./data";
import Menu from './Menu';

const Categories = ({category}) => {

  const data = items.filter(
    (item) => category == "all" || category == item.category
  );

  return (
    <div className="section-center">
      {data.map((item) => (
        <Menu key={item.id} {...item}></Menu>
      ))}
    </div>
  );
};

export default Categories;
