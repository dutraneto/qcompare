import Head from 'next/head'
import Header from 'components/Header/Header'
import ToolTip from 'components/ToolTip/ToolTip'
import Quote from 'components/Quote/Quote'
import FormView from '../Form/FormView'
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
      <Header {...props.logo} siteName={props.siteName} />
      <main className="bg-white p-6">
        <section className="flex gap-5  mb-5">
          <ToolTip {...props.tooltip} />
          <Quote />
        </section>
        <section className="py-6 px-3 mb-5 shadow-sm">
          <FormView />
        </section>
      </main>
      {/* <Footer {...props} /> */}
    </>
  )
}

export default Layout
