import React from 'react';
import './Tricks.css';

const Tricks = ({tricks}) => {
  const cards = [];
  console.log(tricks)
  tricks.forEach(trick => {
    cards.push(
      <div className="card">
        <p>{trick.stance} {trick.name}</p>
        <p>Obstacle: {trick.obstacle}</p>
        <p> Link to Tutorial: </p>
        <a href={trick.tutorial}>{trick.tutorial}</a>
      </div>
    )
  })

    return (
      <section className='trick-section'>
      {cards}
      </section>
    )

}


export default Tricks;
