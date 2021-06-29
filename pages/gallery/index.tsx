import Color from 'color'

import { GetStaticProps } from 'next'
import { CAROUSEL_ITEM } from '../../interfaces/HTML'
import { sampleCarouselData } from '../../utils/sample-data'

import Layout from '../../components/layouts/Layout'
import HTMLHead from '../../components/landmarks/HTMLHead'
import Carousel from '../../components/ui/Carousel/Carousel'

type Props = {
  baseURL: string
  carouselItems: CAROUSEL_ITEM[]
}

const GalleryPage = ({ baseURL, carouselItems }: Props) => (
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
    <Carousel label="Test carousel" carouselItems={carouselItems} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.NEXT_PUBLIC_HOST ?? ''
  const carouselItems: CAROUSEL_ITEM[] = sampleCarouselData
  return { props: { baseURL, carouselItems } }
}

export default GalleryPage