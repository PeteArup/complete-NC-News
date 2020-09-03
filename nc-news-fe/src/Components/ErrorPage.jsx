import React from 'react'

const ErrorPage = ({ msg, status }) => {
  return (
    <p>
      Sorry an error has occured with status {status}, {msg}
    </p>
  )
}

export default ErrorPage
