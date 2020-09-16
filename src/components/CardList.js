import React from 'react';
import Card from './Card.js';

  const CardList = ({robots}) => {
//   if(true) {
//     throw new Error('Noooooooo!!!');
//   }
  const cardComponent = robots.map((_item, i) => {
    return ( 
      <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        username={robots[i].username}/>
      );
    })
    
  return ( 
    <div>
      {cardComponent};    
    </div>
  );
}

export default CardList;