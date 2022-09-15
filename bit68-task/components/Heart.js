
import React from 'react';

function Heart({empty, id, className}) {
  return (
    <label for={id} className = {className}>
      {empty? 
      <svg id="vuesax_linear_heart" data-name="vuesax/linear/heart" xmlns="http://www.w3.org/2000/svg" width="17.96" height="17.96" viewBox="0 0 17.96 17.96">
        <g id="heart" transform="translate(0 0)">
          <path id="Vector" d="M7.947,13.253a1.632,1.632,0,0,1-.928,0C4.849,12.512,0,9.422,0,4.183A4.171,4.171,0,0,1,4.161,0,4.127,4.127,0,0,1,7.483,1.676a4.151,4.151,0,0,1,7.483,2.507C14.967,9.422,10.118,12.512,7.947,13.253Z" transform="translate(1.497 2.32)" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-2" data-name="Vector" d="M0,0H17.96V17.96H0Z" fill="none" opacity="0"/>
        </g>
      </svg>
      :
      <svg id="heart" xmlns="http://www.w3.org/2000/svg" width="17.96" height="17.96" viewBox="0 0 17.96 17.96">
        <path id="Vector" d="M7.947,13.253a1.632,1.632,0,0,1-.928,0C4.849,12.512,0,9.422,0,4.183A4.171,4.171,0,0,1,4.161,0,4.127,4.127,0,0,1,7.483,1.676a4.151,4.151,0,0,1,7.483,2.507C14.967,9.422,10.118,12.512,7.947,13.253Z" transform="translate(1.497 2.32)" fill="#be0f0f"/>
        <path id="Vector-2" data-name="Vector" d="M0,0H17.96V17.96H0Z" fill="#be0f0f" opacity="0"/>
      </svg>}
    </label>
 );
}

export default Heart;
