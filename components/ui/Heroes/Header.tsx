type Props = {
  title: string
  highlighted?: string
}

const Header = ({ title, highlighted }: Props) => (
  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
    <span className="block xl:inline">{title}</span>
    {highlighted && (
      <span className="block text-indigo-600 xl:inline">{` ${highlighted}`}</span>
    )}
  </h1>
)

export default Header
