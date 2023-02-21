import React from 'react'

const Env = ({ env }) => (
  <p>
    This page presents an env variable, should be different based on
    environment: {env}.
  </p>
)

export async function getStaticProps () {
  return {
    props: { env: process.env.TEST } // will be passed to the page component as props
  }
}

export default Env
