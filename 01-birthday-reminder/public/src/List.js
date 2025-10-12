import React from 'react';


const List = ({person}) => {
  return (
    <div className="person">
      <img src={person.image}></img>
      <div>
      <h4>{person.name}</h4>
      <p>{person.age} years</p>
      </div>
    </div>
  );
};
export default List;
