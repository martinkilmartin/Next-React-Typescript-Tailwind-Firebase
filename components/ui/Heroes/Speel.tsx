type Props = {
  speel: string | JSX.Element
}

const Speel = ({ speel }: Props) => (
  <article className="prose lg:prose-xl">
    <p>{speel}</p>
  </article>
)

export default Speel
