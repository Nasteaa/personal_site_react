import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards(props) {
  return (
    <div className='card'>
      <h1>Projects I've built!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src='images/img-meow-chat.png'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/Portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;