import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* <Link className='cards__item__link' to={propTypes.path}> */}
        <a href={props.href} target='_blank' rel='nonreferrer'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Image1' className='cards__item__img'/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
        {/* </Link> */}
      </li>
    </>
  );
}

export default CardItem;