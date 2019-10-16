import React from 'react'
import './BeyCards.css'


function BeyCards (props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.handleClickedBey(props.id)} className ="each-img" />
        </div>
      </div>
    );
  }
  
  export default BeyCards;
  