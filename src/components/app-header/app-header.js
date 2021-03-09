import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './app-header.css';

const AppHeader = () => {

    const [isSavedLinkClicked, setSavedLink] = useState(false);
    const [isHomeLinkClicked, setHomeLink] = useState(true);

    //const classNames = 'star ' + (isSaved ? 'checked' : 'unchecked');

    const homeClassName = isHomeLinkClicked ? 'pressed' : 'unpressed';
    const savedClassName = isSavedLinkClicked ? 'pressed' : 'unpressed';

    return (
        <div className="app-header d-flex">
            <h1>Weather App</h1>

            <Link to="/home">
                <h2
                    className={homeClassName}
                    onClick={() => {
                        setHomeLink(!isHomeLinkClicked)
                        setSavedLink(!isSavedLinkClicked)
                    }}>Home</h2>
            </Link>
            <Link to="/saved">
                <h2
                    className={savedClassName}
                    onClick={() => {
                        setHomeLink(!isHomeLinkClicked)
                        setSavedLink(!isSavedLinkClicked)
                    }}>Saved Locations</h2>
            </Link>


        </div>
    );
};

export default AppHeader;