import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <div className='cards__item'>
        {/* <Link className='cards__item__link' to={propTypes.path}> */}
        <a href={props.href} target='_blank' rel='nonreferrer'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Image1' className='cards__item__img'/>
          </figure>
          <div className='cards__item__info'>
            <h6 className='cards__item__text'>{props.text}</h6>
            <hr/>

          </div>
        </a>
        {/* </Link> */}
      </div>
    </>
  );
}

export default CardItem;