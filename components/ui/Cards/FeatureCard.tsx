import { Feature } from '../../../interfaces/index'
import Image from 'next/image'

type Props = {
  feature: Feature
}

const FeatureCard = ({ feature }: Props) => (
  <div className="card lg:card-side bordered">
    {feature.img && (
      <figure>
        <Image
          src={feature.img.src}
          alt={feature.img.alt}
          width={feature.img.width}
          height={feature.img.height}
        />
      </figure>
    )}
    <div className="card-body">
      <h2 className="card-title">{feature.name}</h2>
      <p>{feature.description}</p>
    </div>
  </div>
)

export default FeatureCard
