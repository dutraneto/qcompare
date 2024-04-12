import Head from 'next/head'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.siteName}</title>
        <link
          rel="shortcut icon"
          href="/images/apple-touch-icon.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/images/apple-touch-icon.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="QA app" />
        <meta name="theme-color" content="#FFD700" />
      </Head>
      <Header
        {...props.logo}
        siteName={props.siteName}
        currentTheme={props.currentTheme}
        setTheme={props.setTheme}
      />
      <Main {...props.tooltip} />
      <Footer />
    </>
  )
}

export default Layout
