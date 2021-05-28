import Color from 'color'

import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import ImageBackground from '../components/ui/Images/ImageBackground'
import Hero from '../components/ui/Heroes/Hero'
import Features from '../components/ui/Features/Features'

type Props = {
  baseURL: string
}

const IndexPage = ({ baseURL }: Props) => (
  <Layout banner={false}>
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
    <ImageBackground backgroundImage="bg-doonagoreXS sm:bg-doonagoreSM md:bg-doonagoreMD lg:bg-doonagoreLG xl:bg-doonagoreXL 2xl:bg-doonagoreXXL">
      <Hero
        title="Faster and Easier than"
        speel="Quickly start selling online with User Interfaces and eCommerce Integrations from Yoo.ie."
        cta="Learn More"
      />
    </ImageBackground>
    <Features />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  return { props: { baseURL } }
}

export default IndexPage
