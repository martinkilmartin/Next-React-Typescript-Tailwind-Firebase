import { Feature } from '../../../interfaces/index'
import FeatureCard from '../Cards/FeatureCard'

type Props = {
  features: Feature[]
}
const Features = ({ features }: Props) => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 text-base-content">
    <div className="prose prose-xl text-center max-w-none">
      <h2>eCommerce</h2>
      <h3>A better way to get online</h3>
      <p>
        You.ie takes all the hassle and jargon out of launching and maintaining
        your online business presence. Always fast, always up-to-date, You.ie
        takes cares of your online presence so you don't have to.
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
