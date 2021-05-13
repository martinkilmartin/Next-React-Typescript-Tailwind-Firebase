import Image from './Image'
import Caption from './Caption'
import { CAROUSEL_ITEM } from '../../../../interfaces/HTML'

type Props = {
  data: CAROUSEL_ITEM
  hidden: boolean
}

function CarouselItem({ data, hidden }: Props) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={data.label}
      className={hidden ? 'hidden' : 'block'}
    >
      <Image src={data.src} alt={data.alt} width={2400} height={1600} />
      <Caption title={data.title} description={data.description} />
    </div>
  )
}
export default CarouselItem
