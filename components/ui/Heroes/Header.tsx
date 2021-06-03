type Props = {
  title: string
  highlighted?: string
}

const Header = ({ title, highlighted }: Props) => (
  <article className="prose">
    <h1 className="mb-5 text-5xl font-bold">
      {title}
      {highlighted && (
        <span className="block text-base-300 xl:inline">{` ${highlighted}`}</span>
      )}
    </h1>
  </article>
)

export default Header
