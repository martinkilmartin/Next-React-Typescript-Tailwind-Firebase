import Color from 'color'

import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import Hero from '../components/ui/Hero'

type Props = {
  baseURL: string
}

const IndexPage = ({ baseURL }: Props) => (
  <Layout>
    <HTMLHead
      title="Welcome to Yoo.ie"
      description="Easier and faster than Shopify. Quickly start selling online with User Interfaces and eCommerce Integrations from Yoo.ie."
      ogImage={`${baseURL}/img/xxl/conor-luddy-coliemore-harbour-dublin-ireland-2400w.jpg`}
      ogImageAlt="Conor Luddy's photo of Coliemore Harbour, Dublin."
      ogSiteName="YooIe"
      ogURL={baseURL}
      icon="/logo-dark.svg"
      maskIcon="/logo-dark.svg"
      maskIconColor={new Color('green')}
    />
    <Hero />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  return { props: { baseURL } }
}

export default IndexPage
