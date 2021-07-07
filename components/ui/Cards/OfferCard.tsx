import { Offer } from '../../../interfaces/index'
import Image from 'next/image'

type Props = {
  offer: Offer
  index: number
}

const OfferCard = ({ offer, index }: Props) => (
  <div
    className="max-w-xs mx-auto mb-4 overflow-hidden shadow-lg card bordered md:mb-0 md:mx-0 bg-base-100"
    key={`${offer.title}-${index}`}
  >
    <figure>
      <Image
        src={offer.img.src}
        alt={offer.img.alt}
        width={offer.img.width}
        height={offer.img.height}
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Top image
        <div className="mx-2 badge badge-primary">NEW</div>
      </h2>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      </p>
      <div className="justify-end card-actions">
        <button className="btn btn-primary">More info</button>
      </div>
    </div>
  </div>
)

export default OfferCard
