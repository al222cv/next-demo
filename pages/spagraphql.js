import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

let baseUri = process.env.VERCEL_URL

if (typeof window !== 'undefined') {
  baseUri = window.location.host
}

const protocol = baseUri.includes('localhost') ? 'http://' : 'https://'
const uri = protocol + baseUri + '/api/graphql'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

const SpaGraphQl = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getBrands = async () => {
      const res = await client.query({
        query: gql`
          query Brands {
            brands {
              name
            }
          }
        `
      })
      setBrands(res.data.brands)
    }
    getBrands()
  }, [])

  return (
    <>
      <p data-testid='text'>
        This page loads data like a classic SPA (on the client):{' '}
      </p>
      {brands.map(b => (
        <p key={b.name}>{b.name}</p>
      ))}
    </>
  )
}

export default SpaGraphQl
