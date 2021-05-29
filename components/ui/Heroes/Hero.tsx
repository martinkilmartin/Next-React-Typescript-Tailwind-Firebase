type Props = {
  title: string
  highlighted?: string
  speel: string | JSX.Element
  cta?: string
}

const Hero = ({ title, highlighted, speel, cta }: Props) => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <article className="prose lg:prose-xl max-w-none">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-primary-content">{title}</span>
            {highlighted && (
              <span className="block text-secondary-content xl:inline">{` ${highlighted}`}</span>
            )}
          </h1>
          <p className="mb-5 text-accent-content">{speel}</p>
          {cta && <button className="btn btn-primary">{cta}</button>}
        </div>
      </div>
    </article>
  </div>
)

export default Hero
