import { Offer } from '../../../interfaces/index'
import OfferCard from '../Cards/OfferCard'

type Props = {
  offers: Offer[]
}

const Offers = ({ offers }: Props) => (
  <section className="text-base-content body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="prose prose-xl text-center max-w-none">
        <h2>Special Offers</h2>
        <h3>Kick start your holiday with our best discounts</h3>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {offers.slice(0, 3).map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </div>
    </div>
  </section>
)

export default Offers
