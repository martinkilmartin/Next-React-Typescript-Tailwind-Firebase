import { Feature } from '../../../interfaces/index'
import Image from 'next/image'

type Props = {
  feature: Feature
}

const FeatureCard = ({ feature }: Props) => (
  <div key={feature.name} className="relative">
    <dt>
      {feature.img && (
        <Image
          src={feature.img.src}
          alt={feature.img.alt}
          width={feature.img.width}
          height={feature.img.height}
        />
      )}
      <p className="px-2 ml-16 text-lg font-medium leading-6 lg:ml-32 text-primary-content bg-primary rounded-2xl">
        {feature.name}
      </p>
    </dt>
    <dd className="mt-2 ml-16 text-base lg:ml-32">{feature.description}</dd>
  </div>
)

export default FeatureCard
