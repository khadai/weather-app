import React from 'react';

import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import WeatherItem from "../weather-item";
import SavedLocationsList from "../saved-locations-list";
import StartImage from "../start-image/start-image";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const App = () => {


    return (
        <div className="weather-app">
            <AppHeader/>
            <div className="search-content">
                <SearchPanel/>
                {/*<StartImage/>*/}
                {/*<Spinner/>*/}
                {/*<ErrorIndicator/>*/}
                {/*<SavedLocationsList/>*/}
            </div>
            <WeatherItem/>
        </div>
    );
};

export default App;