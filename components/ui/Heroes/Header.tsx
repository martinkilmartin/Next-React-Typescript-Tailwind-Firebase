type Props = {
  title: string
  highlighted?: string
}

const Header = ({ title, highlighted }: Props) => (
  <h1>
    {title}
    {highlighted && <span className="text-green-600">{` ${highlighted}`}</span>}
  </h1>
)

export default Header
