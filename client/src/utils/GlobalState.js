import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext; // provider is a special type of REACT component that it can make the state data that's passed into as a prop available to all other components

// custom provider function that maanages and updates our state using the reducer. We instantiate our global state with useProductReducer() function
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    // use this to confim it works~
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />; // dispatch a method we execute to update our state
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

// export functions to be used
export { StoreProvider, useStoreContext };