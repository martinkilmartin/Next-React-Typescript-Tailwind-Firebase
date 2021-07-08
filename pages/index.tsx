import Color from 'color'

import { GetStaticProps } from 'next'

import { Product } from '../interfaces/index'
import { PRODUCTS } from '../constants/products'
import { Offer } from '../interfaces/index'
import { OFFERS } from '../constants/offers'

import Layout from '../components/layouts/Layout'
import HTMLHead from '../components/landmarks/HTMLHead'
import Hero from '../components/ui/Heroes/Hero'
import Features from '../components/ui/Features/Features'
import Products from '../components/ui/Products/Products'
import Offers from '../components/ui/Offers/Offers'
import Testimonials from '../components/ui/Testimonials/Testimonials'

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
  speel: string
  cta: string
  products: Product[]
  offers: Offer[]
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
  speel,
  cta,
  products,
  offers,
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
    <Hero
      backgroundImage="portrait:bg-heroPortraitXS portrait:sm:bg-heroPortraitSM portrait:md:bg-heroPortraitMD portrait:lg:bg-heroPortraitLG portrait:xl:bg-heroPortraitXL portrait:2xl:bg-heroPortraitXXL landscape:bg-heroLandscapeXS landscape:sm:bg-heroLandscapeSM landscape:md:bg-heroLandscapeMD landscape:lg:bg-heroLandscapeLG landscape:xl:bg-heroLandscapeXL landscape:2xl:bg-heroLandscapeXXL"
      title={heroTitle}
      speel={<span>{speel}</span>}
      cta={cta}
    />
    <Features />
    <Products products={products} />
    <Offers offers={offers} />
    <Testimonials />
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
  const speel: string = process.env.NEXT_PUBLIC_HOME_HERO_SPEEL ?? ''
  const cta: string = process.env.NEXT_PUBLIC_HOME_HERO_CTA ?? ''
  const products: Product[] = PRODUCTS
  const offers: Offer[] = OFFERS

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
      speel,
      cta,
      products,
      offers,
    },
  }
}

export default IndexPage
