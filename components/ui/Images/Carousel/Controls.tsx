import Pause from '../../../icons/Pause'
import Play from '../../../icons/Play'
import Previous from '../../../icons/Previous'
import Next from '../../../icons/Next'

type Props = {
  paused: boolean
  play: (o: boolean) => void
  increment: () => void
  decrement: () => void
}

const CarouselControls = ({ paused, play, increment, decrement }: Props) => (
  <div>
    <button
      aria-controls="carousel-items"
      aria-label="Previous"
      onClick={() => decrement()}
    >
      <Previous />
    </button>
    <button aria-label="Pause" onClick={() => play(paused)}>
      {paused ? <Play /> : <Pause />}
    </button>
    <button
      aria-controls="carousel-items"
      aria-label="Next"
      onClick={() => increment()}
    >
      <Next />
    </button>
  </div>
)
export default CarouselControls
