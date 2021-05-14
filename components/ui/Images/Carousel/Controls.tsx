import Pause from '../../../icons/Pause'
import Play from '../../../icons/Play'
import Previous from '../../../icons/Previous'
import Next from '../../../icons/Next'

type Props = {
  paused: boolean
  play: () => void
  increment: () => void
  decrement: () => void
}

const CarouselControls = ({ paused, play, increment, decrement }: Props) => (
  <div>
    <button
      aria-controls="carousel-items"
      aria-label="Previous slide"
      onClick={() => decrement()}
    >
      <Previous />
    </button>
    <button
      aria-label={
        paused ? 'Start automatic slide show' : 'Stop automatic slide show'
      }
      onClick={() => play()}
    >
      {paused ? <Play /> : <Pause />}
    </button>
    <button
      aria-controls="carousel-items"
      aria-label="Next slide"
      onClick={() => increment()}
    >
      <Next />
    </button>
  </div>
)
export default CarouselControls
