const reducer = (state = {weatherItems: []}, action) => {
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

        default:
            return state;
    }
}


export default reducer;