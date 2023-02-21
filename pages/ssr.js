import React from 'react'

const Ssr = ({ data }) => (
  <p>This is a server side rendered page with faked dynamic data: {data} </p>
)

export async function getServerSideProps () {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve('this text is loaded on the server and prerenderd')
    }, 80)
  })
  return {
    props: { data } // will be passed to the page component as props
  }
}

export default Ssr
