const reducer = (state = {weatherItems: [], err: false}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                weatherItems:
                    [...state.weatherItems
                        .filter(weatherItem => weatherItem !== action.payload),
                        action.payload]
            };

        case 'DELETE_ITEM':
            return {
                ...state,
                weatherItems:
                    [...state.weatherItems
                        .filter(weatherItem => weatherItem !== action.payload)]
            };

        case 'ADD_ERR':
            return {
                ...state,
                err: true
            }

        case 'DELETE_ERR':
            return {
                ...state,
                err: false
            }

        default:
            return state;
    }
}


export default reducer;