import Head from 'next/head'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'

function Layout(props) {
  const christmasTime = 'Nov 26'
  const today = new Date()
  const isChristmas = String(today).includes(christmasTime)

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
        isChristmas={isChristmas}
        siteName={props.siteName}
        currentTheme={props.currentTheme}
        setTheme={props.setTheme}
      />
      <Main toolTip={props.tooltip} isChristmas={isChristmas}/>
      <Footer />
    </>
  )
}

export default Layout
