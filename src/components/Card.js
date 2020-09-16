import React from "react";

const Card = (props) => {
  return (
    <div className='tc bg-light-green dib br2 pa3 ma2 grow ba bw1 shadow-5'>
      <img alt="robots" src={`https://robohash.org/${props.id}`} height="150" width="200"/>
        <div>
          <h2>{props.name}</h2>
          <p className='f5 i' >UserName: {props.username}</p>
          <p>E-mail: {props.email}</p>
        </div>
    </div>
  );
}

export default Card;