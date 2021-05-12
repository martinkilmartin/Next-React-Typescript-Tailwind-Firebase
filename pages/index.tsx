import Color from 'color'
import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import Header from '../components/landmarks/Header'

import 'tailwindcss/tailwind.css'

type Props = {
  baseURL: string
}

const IndexPage = ({ baseURL }: Props) => (
  <Layout>
    <HTMLHead
      title="Yoo.ie"
      description="User Interfaces and eCommerce Integrations"
      ogImage={`${baseURL}/img/xxl/conor-luddy-coliemore-harbour-dublin-ireland-2400w.jpg`}
      ogImageAlt="Conor Luddy's photo of Coliemore Harbour, Dublin."
      ogSiteName="YooIe"
      ogURL={baseURL}
      icon="/logo-dark.svg"
      maskIcon="/logo-dark.svg"
      maskIconColor={new Color('green')}
    />
    <Header brand="Yoo.ie" logo="/logo-dark.svg" />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  return { props: { baseURL } }
}

export default IndexPage
