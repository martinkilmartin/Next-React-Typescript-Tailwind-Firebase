type Props = {
  title: string
  highlighted?: string
}

const Header = ({ title, highlighted }: Props) => (
  <h1 className="mb-5 text-5xl font-bold prose">
    {title}
    {highlighted && (
      <span className="block text-base-300 xl:inline">{` ${highlighted}`}</span>
    )}
  </h1>
)

export default Header
