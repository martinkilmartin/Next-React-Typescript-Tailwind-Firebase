type Props = {
  title: string
  highlighted?: string
}

const Header = ({ title, highlighted }: Props) => (
  <article className="prose">
    <h1>
      {title}
      {highlighted && (
        <span className="text-green-600">{` ${highlighted}`}</span>
      )}
    </h1>
  </article>
)

export default Header
