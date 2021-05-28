type Props = {
  title: string
  speel: string | JSX.Element
  cta?: string
}

const Hero = ({ title, speel, cta }: Props) => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <article className="prose lg:prose-xl max-w-none">
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{speel}</p>
          {cta && <button className="btn btn-primary">{cta}</button>}
        </div>
      </div>
    </article>
  </div>
)

export default Hero
