import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Karthick Ragavendran | Home</title>
        <meta
          name='description'
          content='Hey there, this is my portfolio page.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>Karthick Ragavendran</div>
        <div>Web developer.</div>
        <div>React.</div>
      </main>
      <footer>footer text</footer>
    </div>
  )
}

export default Home
