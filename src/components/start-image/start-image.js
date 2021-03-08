import React from 'react';

import './start-image.css';
import img from '../../images/Bitmap.png'

const StartImage = () => {

    return (
        <div className="start-image">
            <img src={img} alt="Clouds and sun"/>
        </div>
    );
};

export default StartImage;