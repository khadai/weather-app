import React from 'react';

import './app-header.css';

const AppHeader = () => {


    return (
        <div className="app-header d-flex">
            <h1>Weather App</h1>

            <a href="#/home">
                <h2 className="pressed">Home</h2>
            </a>
            <a href="#/saved">
                <h2>Saved Locations</h2>
            </a>


        </div>
    );
};

export default AppHeader;