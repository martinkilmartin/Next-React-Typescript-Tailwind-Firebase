import { Offer } from '../../../interfaces/index'
import Image from 'next/image'

type Props = {
  offer: Offer
}

const OfferCard = ({ offer }: Props) => (
  <div className="max-w-xs mx-auto mb-4 overflow-hidden shadow-lg card bordered md:mb-0 md:mx-0 bg-base-100">
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
        {offer.title}
        <div className="mx-2 badge badge-primary">{offer.category}</div>
      </h2>
      <p>{offer.description}</p>
      <div className="justify-end card-actions">
        <button className="btn btn-primary">{offer.cta}</button>
      </div>
    </div>
  </div>
)

export default OfferCard
