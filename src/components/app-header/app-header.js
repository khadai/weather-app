import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './app-header.css';

const AppHeader = () => {

    const [isSavedLinkClicked, setSavedLink] = useState(false);
    const [isHomeLinkClicked, setHomeLink] = useState(true);

    const homeClassName = isHomeLinkClicked ? 'pressed' : 'unpressed';
    const savedClassName = isSavedLinkClicked ? 'pressed' : 'unpressed';

    return (
        <div className="app-header d-flex">
            <h1>Weather App</h1>

            <Link to="/" >
                <h2
                    className={homeClassName}
                    onClick={() => {
                        setHomeLink(true)
                        setSavedLink(false)
                    }}>Home</h2>
            </Link>
            <Link to="/saved">
                <h2
                    className={savedClassName}
                    onClick={() => {
                        setHomeLink(false)
                        setSavedLink(true)
                    }}>Saved Locations</h2>
            </Link>

        </div>
    );
};

export default AppHeader;