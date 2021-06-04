import { Lighthouse } from '../../icons/Accomodation'
import { Bus } from '../../icons/Travel'
import { Pamphlet } from '../../icons/Travel'
import { HotPot } from '../../icons/Food'

const features = [
  {
    name: 'Make every click count',
    description:
      'Speed is an increasingly important ranking factor for Google Search and Ads',
    icon: Lighthouse,
  },
  {
    name: 'Increase conversions',
    description:
      'Walmart found that for every 1 second improvement in page load time, conversions increased by 2%.',
    icon: Bus,
  },
  {
    name: 'Full Web Accessibility',
    description:
      'One billion people around the world utilize accessibility features to navigate the internet.',
    icon: Pamphlet,
  },
  {
    name: 'Web Standards',
    description:
      'Continuous integration  and continuous delivery means your website will always stay fast anf fresh.',
    icon: HotPot,
  },
]

const Features = () => (
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
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <feature.icon className="float-left w-12 h-12 py-2 mr-2 rounded-xl lg:w-24 lg:h-24 ring ring-primary ring-offset-base-100 ring-offset-4" />
              <p className="ml-16 text-lg font-medium leading-6 lg:ml-32">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base lg:ml-32">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
)

export default Features
