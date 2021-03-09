import React, {useState} from 'react';
import {useForm} from "react-hook-form";


import './search-panel.css';

const SearchPanel = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [search, setSearch] = useState('');
    const { onSearchChange = () => {} } = props;

    const onSubmit = (data) => {
        setSearch(data.search);
        onSearchChange(data.search);
        console.log('panel '+search)
    };

    return (
        <form className="search-panel input-group mb-3" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="form-control" placeholder="Type city or ZIP code"
                   aria-label="Type city or zip-code" aria-describedby="basic-addon2"
                   ref={register} name="search"
            />
            <button type='submit' className="input-group-text" id="basic-addon2">Search</button>

        </form>
    );
};

export default SearchPanel;
