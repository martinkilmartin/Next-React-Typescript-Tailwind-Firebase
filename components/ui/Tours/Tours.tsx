import TourCard from '../Cards/TourCard'

import { PRODUCTS } from '../../../constants/products'

const Tours = () => (
  <div className="container px-4">
    <div className="lg:flex">
      {PRODUCTS.slice(0, 3).map((tour, index) => (
        <TourCard tour={tour} index={index} />
      ))}
    </div>
    <div className="lg:flex">
      {PRODUCTS.slice(3).map((tour, index) => (
        <TourCard tour={tour} index={index} />
      ))}
    </div>
  </div>
)

export default Tours
