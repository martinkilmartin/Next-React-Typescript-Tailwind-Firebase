import Picture from '../Images/Picture/Picture'
import Caption from './Caption'
import { CAROUSEL_ITEM } from '../../../interfaces/HTML'

type Props = {
  data: CAROUSEL_ITEM
  hidden: boolean
  play: () => void
}

function CarouselItem({ data, hidden, play }: Props) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={data.label}
      className={hidden ? 'hidden' : 'block'}
      onFocus={() => play()}
      onBlur={() => play()}
      onMouseEnter={() => play()}
      onMouseLeave={() => play()}
    >
      <Picture src={data.src} alt={data.alt} width={2400} height={1600} />
      <Caption title={data.title} description={data.description} />
    </div>
  )
}
export default CarouselItem
