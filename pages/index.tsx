import Color from 'color'

import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import ImageBackground from '../components/ui/Images/ImageBackground'
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
      title={title}
      description={description}
      ogImage={`${baseURL}${ogImgSrc}`}
      ogImageAlt={ogImgAlt}
      ogSiteName={ogSiteName}
      ogURL={baseURL}
      icon={icon}
      maskIcon={maskIcon}
      maskIconColor={new Color(maskIconColor)}
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
