import { Feature } from '../../../interfaces/index'
import FeatureCard from '../Cards/FeatureCard'

type Props = {
  features: Feature[]
}
const Features = ({ features }: Props) => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 text-base-content">
    <div className="prose prose-xl text-center max-w-none">
      <h2>Why Choose MCT Irish Tours?</h2>
      <h3>Touring Ireland is second nature for us.</h3>
      <p>
        Our tour planning department will happily plan, book, and coordinate all
        tour plans, from airport transfers to coach hire and tour guide booking,
        hotel bookings, restaurant &amp; attractions, all your requirements in
        one complete itinerary from your arrival in Ireland until your
        departure.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index.toString()} />
        ))}
      </dl>
    </div>
  </div>
)

export default Features
