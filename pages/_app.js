import Link from 'next/link'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <p>
        <Link href={'/'}>Back to start</Link>
      </p>
      <Component {...pageProps} />
    </>
  )
}
