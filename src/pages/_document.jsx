// https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon-q.png" />
          <link rel="dns-fetch" href="https://maps.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            crossOrigin="anonymous"
            href={`https://fonts.googleapis.com/css?family=Montserrat:200,400,500&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-black relative">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
