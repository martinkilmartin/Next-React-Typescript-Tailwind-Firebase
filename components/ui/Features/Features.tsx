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
  <div className="py-12 bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-xl font-semibold tracking-wide text-indigo-600 uppercase">
          eCommerce
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A better way to get online
        </p>
        <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
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
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
)

export default Features
