import Pause from '../../../icons/Pause'
import Previous from '../../../icons/Previous'
import Next from '../../../icons/Next'

const CarouselControls = () => (
  <div>
    <button aria-label="Pause">
      <Pause />
    </button>
    <button aria-controls="carousel-items" aria-label="Previous">
      <Previous />
    </button>
    <button aria-controls="carousel-items" aria-label="Next">
      <Next />
    </button>
  </div>
)
export default CarouselControls
