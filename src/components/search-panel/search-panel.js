import React, {useState} from 'react';

import './search-panel.css';

const SearchPanel = () => {

    const [label, setLabel] = useState('');

    // onSubmit(e){
    //     setLabel
    // }
    return (
        <form className="search-panel input-group mb-3"
            >
            <input type="text" className="form-control" placeholder="Type city or ZIP code"
                   aria-label="Type city or zip-code" aria-describedby="basic-addon2"
                    />
            <button className="input-group-text" id="basic-addon2">Search</button>

        </form>
    );
};

export default SearchPanel;
