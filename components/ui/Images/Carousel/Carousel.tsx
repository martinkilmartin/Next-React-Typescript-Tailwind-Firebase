import CarouselControls from './Controls'
import CarouselItems from './Items'
import { CAROUSEL_ITEM } from '../../../../interfaces/HTML'

type Props = {
  label: string
  carouselItems: CAROUSEL_ITEM[]
}

const Carousel = ({ label, carouselItems }: Props) => (
  <section aria-roledescription="carousel" aria-label={label}>
    <CarouselControls />
    <CarouselItems items={carouselItems} />
  </section>
)
export default Carousel
