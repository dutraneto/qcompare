import Layout from 'components/Layout/Layout'

const localData = {
  siteName: 'Qcompare',
  logo: {
    url: '/images/logo-eat2.png',
    alt: 'Quarry Logo'
  },
  tooltip: {
    iconUrl: '/images/icontip.svg',
    iconChristmas: '/images/icontip-christmas.svg',
    title: 'Qcompare',
    description:
      'You just have to copy and paste your texts and click on the button. <br>Qcompare will find the difference between two texts.'
  }
}

export default function Index() {
  return <Layout {...localData} />
}
