import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import WeatherItem from "../weather-item";
import SavedLocationsList from "../saved-locations-list";

import OpenWeatherService from "../../services/openweather-service";
import {addItem, deleteItem} from "../../store/actions";

const App = () => {

    const openWeatherService = new OpenWeatherService();
    const [search, setSearch] = useState("");
    const [data, setData] = useState();
    const [err, setErr] = useState(false);


    useEffect(() => {
        openWeatherService.getDataByCityName(search).then((res) => {
            setData(res);
        }).catch(() => {
            setErr(true)
        })
    }, [search, err]);

    return (
        <div className="weather-app">
            <Router>
                <AppHeader/>
                <Route
                    path="/" exact render={() => (
                    <React.Fragment>
                        <div className="search-content">
                            <SearchPanel onSearchChange={(search) => setSearch(search)}/>
                        </div>
                        <WeatherItem
                            item={data}
                            err={err}
                        />
                    </React.Fragment>
                )}/>
                <Route
                    path="/saved" render={() => (
                    <SavedLocationsList/>
                )}/>
            </Router>
        </div>
    );
};

export default App;