// import App from "next/app";
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Qcompare</title>
        <link
          rel="shortcut icon"
          href="/images/favicon-152px.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon-152px.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="QA app for Quarry" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
