import Color from 'color'

import { GetStaticProps } from 'next'
import { CAROUSEL_ITEM } from '../../interfaces/HTML'
import { sampleCarouselData } from '../../utils/sample-data'

import Layout from '../../components/layouts/Layout'
import HTMLHead from '../../components/landmarks/HTMLHead'
import Carousel from '../../components/ui/Carousel/Carousel'

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
  carouselItems: CAROUSEL_ITEM[]
}

const GalleryPage = ({
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
  carouselItems,
}: Props) => (
  <Layout brandName={brandName}>
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
    <Carousel label="Test carousel" carouselItems={carouselItems} />
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
  const carouselItems: CAROUSEL_ITEM[] = sampleCarouselData
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
      carouselItems,
    },
  }
}

export default GalleryPage
