import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title>Next App Demo</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href={'/static'}>Static page</Link>
      <br />
      <br />
      <Link href={'/ssr'}>SSR page</Link>
      <br />
      <br />
      <Link href={'/spa'}>SPA page</Link>
      <br />
      <br />
      <Link href={'/spa'}>SPA page graphql</Link>
      <br />
      <br />
      <Link href={'/env'}>Env</Link>
      <br />
      <br />
      <Link href={'/api/brands'}>Json API endpoint</Link>
    </>
  )
}
