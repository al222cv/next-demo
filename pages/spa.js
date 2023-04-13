import React, { useEffect, useState } from 'react'

const Spa = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getBrands = async () => {
      const res = await fetch('/api/brands')
      const json = await res.json()
      console.log('Getting brands')
      setBrands(json)
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

export default Spa
