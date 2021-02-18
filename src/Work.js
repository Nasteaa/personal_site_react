import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Row, Col } from 'react-bootstrap';
// import './Work.css';

function Work() {


  return (
    <div className='cards'>
  <h1>Projects I've built!</h1>
  <div className='cards__container'>
    <div className='cards__wrapper'>
        <Row>
        <CardItem 
        href='https://meow-meow-meow-chat.herokuapp.com/'
        src='images/img-meow-chat.png'
        text='Python | Flask | Jinja | PostgreSQL
        Project inspired by twitter but made with cats!'
        label='Meow Chat'
        path='/Portfolio'
        />
        </Row>
        {/* <Row>
        <CardItem 
        href='https://meow-meow-meow-chat.herokuapp.com/'
        src='images/img-meow-chat.png'
        text='Python | Flask | Jinja | PostgreSQL
        Project inspired by twitter but made with cats!'
        label='Meow Chat'
        path='/Portfolio'
        />
        </Row> */}
    </div>
  </div>
</div> 
  )
}


export default Work;


