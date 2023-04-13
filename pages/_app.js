import '@/styles/globals.css'
import Link from 'next/link'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Link href={'/'}>Back to start</Link>
      <Component {...pageProps} />
    </>
  )
}
