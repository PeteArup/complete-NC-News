import React from 'react'

const LoginToView = ({ children, user, name }) => {
  if (user) return <div>{children}</div>
  return <p>log in required to {name}</p>
}

export default LoginToView
