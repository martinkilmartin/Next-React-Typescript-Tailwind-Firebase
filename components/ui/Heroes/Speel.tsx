type Props = {
  speel: string | JSX.Element
}

const Speel = ({ speel }: Props) => (
  <p className="mb-5 prose lg:prose-xl">{speel}</p>
)

export default Speel
