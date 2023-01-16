import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ORGANIZE</title>
        <meta name="description" content="ORGANIZE, mejorando tu estilo de vida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex flex-col justify-start items-center pt-8'>
        <div className='mb-8'>
          <Image
            src="/img/Header/laptop.png"
            alt="Img laptop"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className='text-center'>
          <h1 className='my-2'>ORGANIZE</h1>
          <p className='my-2 mb-6'>La mejor forma de organizar tu vida y encontrar el orden que necesitas.</p>
          <Link href="/" className='btn-purple my-2'>Comenzar</Link>
        </div>
      </main>
    </>
  )
}
