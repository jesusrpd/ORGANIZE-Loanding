import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Nav from '@/components/general/Nav'
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
      <Nav/>
      <main className='w-full h-screen flex flex-col justify-start items-center pt-8 px-8'>
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
          <p className='my-2 mb-6 text-base'>La mejor forma de organizar tu vida y encontrar el orden que necesitas.</p>
          <Link href="/" className='btn-purple my-2'>Comenzar</Link>
        </div>
      </main>
      <section className='w-full h-screen flex flex-col justify-center items-center px-8'>
        <h2 className='mb-12'>Sobre Nosotros</h2>
        <div className='mb-12'>
          <Image
            src="/img/AboutUs/manAndwoman.png"
            alt="man and woman img"
            width={190}
            height={150}
          />
        </div>
        <div className='text-center mb-12'>
          <p>Somos una comunidad de desarrolladores, que busca ofrecer a las personas una herramienta para ayudarlos a mejorar su calidad de vida, ofreciéndoles herramientas para mantener un mejor orden y cuidado personal.</p> <br/><br/>
          <p><span className='remark'>ORGANIZE</span> cuenta con diversas funcionalidades, constantemente actualizamos la plataforma para ofrecer lo mejor a nuestros usuarios.</p>
        </div>
      </section>
    </>
  )
}
