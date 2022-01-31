import React, { createContext } from 'react';
import usefirebase from '../hooks/usefirebase';



export const AuthContext = createContext();
const AuthProvider = (props) => {
    const {children} = props;
    const allContexts = usefirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;