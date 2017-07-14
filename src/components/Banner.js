import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
      <div className={'banner'}>
        <div style={{width: '20%', borderRight: '2px solid black', paddingRight: '5px'}}><Link to='/' className='btn buttonBack'> Back </Link></div>
        <div style={{width: '80%', paddingLeft: '20px'}}><h1>EKA</h1></div>
      </div>
    );
}

export default Banner;