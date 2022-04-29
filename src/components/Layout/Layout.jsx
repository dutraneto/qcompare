import Head from 'next/head'

function Layout(props) {
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
      {/* <Header {...props} /> */}
      <main>{props.children}</main>
      {/* <Footer {...props} /> */}
    </>
  )
}

export default Layout
