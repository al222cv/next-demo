import React, { useEffect } from 'react'

const error = () => {
  useEffect(() => {
    throw new Error('Lol')
  }, [])
  return <p>This is an page with errors</p>
}

export default error
