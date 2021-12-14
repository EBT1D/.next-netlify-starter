import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Estar Brown Entertainment</title>
        <Header title="Welcome to Estar Brown Entertainment" />
      </Head>

      <main>
        <Header title="This website is the home for Estar Brown Entertainment" />
        <p className="description">
          Feel free to click any of these buttons to view many guides that will compleatly make any sane person laugh!
        </p>
        <p className="description">
            Please note that the site is currently under construction, so it may have parts that do not function at this time. I do plan to make this site completley functional for everyone in the near future.
        </p>
        <button type="button" formaction="/https://docs.google.com/document/d/17kA5vqQTMePl9GUJWRcE3lfB5KQYAVAzQ3V6MEzIgNw/edit?usp=sharing>How to make someone shut up.</button>
        <button type="button" onclick="alert('Button isnt functioning. Please try again later')">5 easy steps to find your dad</button>
      </main>

      <Footer />
      <p>
        Copyright 2021 Estar Brown Entertainment. Currently in website version Alpha 1.2
      </p>
    </div>
  )
}
