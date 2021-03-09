import React from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";

const SavedLocationsList = (props) => {

    const {savedItems, onItemSaved, onItemUnsaved} = props;

    /*
    * const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } />
      </li>
    );
  });
    * */

    const elements = savedItems.map((item)=>{
        return <WeatherItem searchCity={item.city}
                            onItemSaved={(item) => onItemSaved(item)}
                            onItemUnsaved={(item) => onItemUnsaved(item)}/>


    })


    return (
        <div>
            {elements}
        </div>
    );
};

export default SavedLocationsList;