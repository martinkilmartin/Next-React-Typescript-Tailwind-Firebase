import CarouselItem from './Item'
import { CAROUSEL_ITEM } from '../../../../interfaces/HTML'

type Props = {
  items: CAROUSEL_ITEM[]
}

const CarouselItems = ({ items }: Props) => (
  <div id="carousel-items" aria-live="off">
    {items.map((item, index) => (
      <CarouselItem data={item} key={item.src + index} />
    ))}
  </div>
)

export default CarouselItems
