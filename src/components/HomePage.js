import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1> Home Page</h1>
            <hr/>
            <h3> Welcome {user.name}</h3>
        </div>
    )
}
