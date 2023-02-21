import React from 'react'

const Static = () => (
  <p>
    This page presents an env variable, should be different based on
    environment: {process.env.TEST}
  </p>
)

export default Static
