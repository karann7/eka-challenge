import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
      <div className='welcome'>
        <h1>Hello and welcome to EKA.</h1>
        <Link className='btn registerBtn' to='/register'>Register</Link>
      </div>
    );
}

export default Banner;