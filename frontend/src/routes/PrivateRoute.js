import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, user, ...rest}) => {
  const users = useSelector(state => state.auth)
  
  return (
    <Route {...rest} component={(props) => (
      users.isAuthenticated && users.type === user ? 
        <Component {...props} /> : 
        <Redirect to="/" />
    )} />
  )
}

export default PrivateRoute