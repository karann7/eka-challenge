import React from 'react';

const Banner = (props) => {
    return (
      <div className={'banner'}>
        <div style={{width: '20%', borderRight: '2px solid black', paddingRight: '5px'}}><button className={'buttonBack'}> Back </button></div>
        <div style={{width: '80%', paddingLeft: '20px'}}><h1>EKA</h1></div>
      </div>
    );
}

export default Banner;