import Layout from 'components/Layout/Layout'

const localData = {
  siteName: 'The Qcompare Texts on Your Hand',
  logo: {
    url: 'https://www.quarry.com/_themes/quarry/_/img/logo-quarry.png',
    alt: 'Quarry Logo'
  },
  tooltip: {
    iconUrl: '/images/icontip.svg',
    title: 'Compare Text',
    description:
      'You just have to copy and paste your files and click Show Difference. Qcompare will find the difference between two texts'
  }
}

export default function Index() {
  return <Layout {...localData} />
}
