import Heart from '../../icons/Heart'
import Sun from '../../icons/Sun'
import MapPin from '../../icons/MapPin'
import Shamrock from '../../icons/Shamrock'

const features = [
  {
    name: 'MAGIC MOMENTS',
    description:
      'Include photos of real people enjoying magic, nostalgic moments, like that first 99 of the summer. Authentic, relatable and joyful snapshots have great impact.',
    icon: Heart,
  },
  {
    name: 'JOYFUL DISCOVERY',
    description:
      'Use images of real people exploring the landscape, immersed in nature as they climb mountains, cycle roads, wander around towns, try new foods and tour heritage areas.',
    icon: Sun,
  },
  {
    name: 'EPIC LAND',
    description:
      'Choose the kind of images that are unexpected and would take your breath away. Think epic landscapes, birds-eye views of cities, powerful coastlines and majestic mountains.',
    icon: MapPin,
  },
  {
    name: 'SENSORY, HUMAN, FRESH',
    description:
      'When it comes to breaks away there are two types of very different holiday experiences—the planned and the unexpected.',
    icon: Shamrock,
  },
]

const Features = () => (
  <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 text-base-content">
    <div className="prose prose-xl text-center max-w-none">
      <h2>Creative principles</h2>
      <h3>Key consumer insight</h3>
      <p>
        Great photos and videos help visitors to discover and choose your
        destination or tourism business. Every tourism business should aim for
        thumb-stopping visual impact to really bring your destination to life in
        front of your visitors eyes online.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <div className="absolute flex items-center justify-center w-12 h-12 rounded-md bg-primary">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg font-medium leading-6">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
)

export default Features
