import CarouselItem from './Item'
import { CAROUSEL_ITEM } from '../../../../interfaces/HTML'

type Props = {
  items: CAROUSEL_ITEM[]
  step: number
}

const CarouselItems = ({ items, step }: Props) => (
  <div id="carousel-items" aria-live="off">
    {items.map((item, index) => (
      <CarouselItem
        data={item}
        key={item.src + index}
        hidden={step !== index + 1}
      />
    ))}
  </div>
)

export default CarouselItems
