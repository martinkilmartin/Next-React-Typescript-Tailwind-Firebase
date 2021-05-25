import Color from 'color'

import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import Hero from '../components/ui/Heroes/Hero'
import Features from '../components/ui/Features/Features'

type Props = {
  baseURL: string
}

const IndexPage = ({ baseURL }: Props) => (
  <Layout banner={true}>
    <HTMLHead
      title="Keep Discovering Ireland with Michael Cowell Irish Tours."
      description="You’re invited to break, to discover new places, make new memories, and enjoy a well-deserved holiday"
      ogImage={`${baseURL}/img/xxl/conor-luddy-coliemore-harbour-dublin-ireland-2400w.jpg`}
      ogImageAlt="Conor Luddy's photo of Coliemore Harbour, Dublin."
      ogSiteName="YooIe"
      ogURL={baseURL}
      icon="/logo-dark.svg"
      maskIcon="/logo-dark.svg"
      maskIconColor={new Color('green')}
    />
    <Hero
      title="Fun &amp; Exploration"
      highlighted="Reset &amp; Re-connect"
      speel={
        <span>
          Discovering Begins <u>Here</u> with Michael Cowell Irish Tours.
        </span>
      }
    />
    <Features />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  return { props: { baseURL } }
}

export default IndexPage
