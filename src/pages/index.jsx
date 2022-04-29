import Layout from 'components/Layout/Layout'

const data = {
  siteName: 'The Qcompare Texts on Your Hand',
  logo: {
    url: 'https://www.quarry.com/_themes/quarry/_/img/logo-quarry.png',
    alt: 'Quarry Logo'
  }
}

export default function Home() {
  return <Layout data={data}></Layout>
}
