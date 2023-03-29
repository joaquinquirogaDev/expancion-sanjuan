import React, { useState, useEffect } from 'react';

export const Context = React.createContext();
    
const StateProvider = ({ children }) => {

    const [state, setState] = useState('');

    useEffect(() => {
        const user = sessionStorage.getItem('state')
        setState(user)
    }, [])
    // const user = localStorage.getItem("state") || ''
    
    const setUser = (user) => {
        setState(user);
        sessionStorage.setItem('state', user)
    };

    const context = {
        state,
        setUser,
    };

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
};

export default StateProvider;