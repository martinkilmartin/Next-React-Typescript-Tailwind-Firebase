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
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">
          {title}
          {highlighted && (
            <span className="block text-base-300 xl:inline">{` ${highlighted}`}</span>
          )}
        </h1>
        <p className="mb-5">{speel}</p>
        <button className="btn btn-primary">{cta}</button>
      </div>
    </div>
  </div>
)

export default Hero
