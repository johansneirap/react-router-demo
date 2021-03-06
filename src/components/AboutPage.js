import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1> About Page</h1>
            <hr/>
            <button className="btn btn-outline-danger"
            onClick={()=>setUser({})}>
                Log Out
            </button>
        </div>
    )
}
