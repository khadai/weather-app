export const addItem = (payload) => ({type: 'ADD_ITEM', payload});

export const deleteItem = (payload) => ({type: 'DELETE_ITEM', payload});

export const addErr = () => ({type: 'ADD_ERR'});

export const deleteErr = () => ({type: 'DELETE_ERR'});
