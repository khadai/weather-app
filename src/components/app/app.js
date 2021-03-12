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

    const dispatch = useDispatch()
    const weatherItems = useSelector(state => state.weatherItems);
    console.log('wtf' + weatherItems);

    const openWeatherService = new OpenWeatherService();
    const [search, setSearch] = useState("");
    const [isSaved, setSaved] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        openWeatherService.getDataByCityName(search).then((res) => {
            setData(res);
        }).catch((e) => {
            console.log(e)
        })
    }, [search]);

    function onSearchChange(search) {
        setSearch(search)
    }

    return (
        <div className="weather-app">
            <Router>
                <AppHeader/>
                <Route
                    path="/" exact render={() => (
                    <React.Fragment>
                        <div className="search-content">
                            <SearchPanel onSearchChange={onSearchChange}/>
                        </div>
                        <WeatherItem
                            item={data}
                            onItemSaved={(item) => dispatch(addItem(item))}
                            onItemUnsaved={(item) => dispatch(deleteItem(item))}
                            isItemSaved={isSaved}
                        />
                    </React.Fragment>
                )}/>
                <Route
                    path="/saved" render={() => (
                    <SavedLocationsList
                        savedItems={weatherItems}
                        onItemSaved={(item) => dispatch(addItem(item))}
                        onItemUnsaved={(item) => dispatch(deleteItem(item))}
                    />
                )}/>
            </Router>
        </div>
    );
};

export default App;