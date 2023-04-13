import React, { useEffect } from 'react'

const ErrorPage = () => {
  useEffect(() => {
    throw new Error('Lol')
  }, [])
  return <p data-testid='text'>This is an page with errors</p>
}

export default ErrorPage
