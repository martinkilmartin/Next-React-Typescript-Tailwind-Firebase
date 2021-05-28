import Heart from '../../icons/Heart'
import Moon from '../../icons/Moon'

const Banner = () => (
  <div className="bg-primary">
    <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between">
        <Moon className="w-6 h-6" aria-hidden="true" />
        <p className="ml-3 font-medium truncate">
          <span className="md:hidden">We announced a new product!</span>
          <span className="hidden md:inline">
            Big news! We're excited to announce a brand new product.
          </span>
        </p>
        <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" className="link">
            Learn more
          </a>
        </div>
        <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
          <button type="button" className="btn btn-primary">
            <span className="sr-only">Dismiss</span>
            <Heart
              className="w-6 h-6 text-primary-content"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Banner
