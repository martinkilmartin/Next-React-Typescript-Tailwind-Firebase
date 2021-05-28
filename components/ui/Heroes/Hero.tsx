import Divider from './Divider'
import Header from './Header'
import Speel from './Speel'

type Props = {
  title: string
  highlighted?: string
  speel: string | JSX.Element
}

const Hero = ({ title, highlighted, speel }: Props) => (
  <div className="relative bg-white overflow-clip">
    <div className="mx-auto max-w-7xl">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <Divider />
        <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <Header title={title} highlighted={highlighted} />
            <Speel speel={speel} />
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <button className="btn btn-primary">primary</button>
              <button className="btn btn-secondary">secondary</button>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
)

export default Hero
