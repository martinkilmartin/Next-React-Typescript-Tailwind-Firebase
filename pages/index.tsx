import Color from 'color'

import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import Hero from '../components/ui/Heroes/Hero'
import Features from '../components/ui/Features/Features'

type Props = {
  baseURL: string
  title: string
  brandName?: string
  description: string
  ogImgSrc: string
  ogImgAlt: string
  ogSiteName: string
  icon: string
  maskIcon: string
  maskIconColor: string
  heroTitle: string
  heroHighlighted: string
  speel: string
}

const IndexPage = ({
  baseURL,
  title,
  brandName,
  description,
  ogImgSrc,
  ogImgAlt,
  ogSiteName,
  icon,
  maskIcon,
  maskIconColor,
  heroTitle,
  heroHighlighted,
  speel,
}: Props) => (
  <Layout banner={false} brandName={brandName}>
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
    <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-primary to-secondary text-primary-content">
      <Hero
        title={heroTitle}
        highlighted={heroHighlighted}
        speel={<span>{speel}</span>}
      />
    </div>
    <Features />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  const title: string = process.env.NEXT_PUBLIC_HOME_TITLE ?? ''
  const brandName: string = process.env.NEXT_PUBLIC_SITE_NAME ?? ''
  const description: string = process.env.NEXT_PUBLIC_HOME_DESCRIPTION ?? ''
  const ogImgSrc: string = process.env.NEXT_PUBLIC_HOME_OG_IMG_SRC ?? ''
  const ogImgAlt: string = process.env.NEXT_PUBLIC_HOME_OG_IMG_ALT ?? ''
  const ogSiteName: string = process.env.NEXT_PUBLIC_SITE_NAME ?? ''
  const icon: string = process.env.NEXT_PUBLIC_SITE_ICON ?? ''
  const maskIcon: string = process.env.NEXT_PUBLIC_SITE_MASK_ICON ?? ''
  const maskIconColor: string =
    process.env.NEXT_PUBLIC_SITE_MASK_ICON_COLOR ?? ''
  const heroTitle: string = process.env.NEXT_PUBLIC_HOME_HERO_TITLE ?? ''
  const heroHighlighted: string =
    process.env.NEXT_PUBLIC_HOME_HERO_HIGHLIGHT ?? ''
  const speel: string = process.env.NEXT_PUBLIC_HOME_HERO_SPEEL ?? ''

  return {
    props: {
      baseURL,
      title,
      brandName,
      description,
      ogImgSrc,
      ogImgAlt,
      ogSiteName,
      icon,
      maskIcon,
      maskIconColor,
      heroTitle,
      heroHighlighted,
      speel,
    },
  }
}

export default IndexPage
