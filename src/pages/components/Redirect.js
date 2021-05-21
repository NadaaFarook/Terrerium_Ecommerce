import React from 'react'
import { Navigate, Route } from 'react-router';
import { useUserData } from '../../Context-Reducer/UserDatacontext';

export default function Redirect({ path, ...props }) {
    const {user} = useUserData()
    return (
       user.name == null  ?  (
            <Navigate state={{ from: path }} replace to="/login" />
          ): (
            <Route {...props} path={path} />
          ) 
    )
}
