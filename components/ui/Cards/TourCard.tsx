import { Product } from '../../../interfaces/Products/index'
import Image from 'next/image'

type Props = {
  tour: Product
  index: number
}

const TourCard = ({ tour, index }: Props) => (
  <div className="px-2 m-2 text-center shadow-2xl card" key={index}>
    <figure className="px-10 pt-10">
      <Image
        src={tour.imgSrc}
        alt={tour.imgAlt}
        width={tour.imgWidth}
        height={tour.imgHeight}
        className="rounded-xl"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {tour.title}
        {tour.offer && (
          <div className="mx-2 badge badge-error">{tour.offer.type}</div>
        )}
      </h2>
      {tour.description.map((desc, jndex) => (
        <p key={jndex}>{desc}</p>
      ))}
      <div className="justify-center card-actions">
        <h2 className="mb-5 text-2xl">{tour.price}</h2>
        <button className="btn btn-primary">{tour.cta}</button>
      </div>
    </div>
  </div>
)

export default TourCard
