import CreditCard from '../../icons/CreditCard'
import Bag from '../../icons/Bag'
import Heart from '../../icons/Heart'
import Moon from '../../icons/Moon'

const features = [
  {
    name: 'Make every click count',
    description:
      'Speed is an increasingly important ranking factor for Google Search and Ads',
    icon: CreditCard,
  },
  {
    name: 'Increase conversions',
    description:
      'Walmart found that for every 1 second improvement in page load time, conversions increased by 2%.',
    icon: Bag,
  },
  {
    name: 'Full Web Accessibility',
    description:
      'One billion people around the world utilize accessibility features to navigate the internet.',
    icon: Heart,
  },
  {
    name: 'Web Standards',
    description:
      'Continuous integration  and continuous delivery means your website will always stay fast anf fresh.',
    icon: Moon,
  },
]

const Features = () => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 text-base-content">
    <article className="prose lg:prose-xl max-w-none">
      <div className="lg:text-center">
        <h2>eCommerce</h2>
        <h3>A better way to get online</h3>
        <p>
          You.ie takes all the hassle and jargon out of launching and
          maintaining your online business presence. Always fast, always
          up-to-date, You.ie takes cares of your online presence so you don't
          have to.
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
    </article>
  </div>
)

export default Features
