import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  const user = useSelector(state => state.auth)
  
  return (
    <Route {...rest} component={(props) => (
      user.isAuthenticated ? 
        <Component {...props} /> : 
        <Redirect to="/" />
    )} />
  )
}

export default PrivateRoute