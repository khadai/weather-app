import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">OOPS!</span>
            <span>
                something has gone  wrong
            </span>
            <span>
                try again later
            </span>
        </div>
    );
};

export default ErrorIndicator;
