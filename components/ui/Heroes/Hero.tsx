import Header from './Header'
import Speel from './Speel'

type Props = {
  backgroundImage: string
  title: string
  highlighted?: string
  speel: string | JSX.Element
  cta?: string
}

const Hero = ({ backgroundImage, title, highlighted, speel, cta }: Props) => (
  <div className={backgroundImage + ' min-h-screen hero'}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-center hero-content text-neutral-content">
      <div className="max-w-lg">
        <Header title={title} highlighted={highlighted} />
        <Speel speel={speel} />
        <button className="btn btn-primary">{cta}</button>
      </div>
    </div>
  </div>
)

export default Hero
