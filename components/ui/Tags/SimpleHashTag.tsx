type Props = {
  tag: string
}

const SimpleHashTag = ({ tag }: Props) => (
  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
    #{tag}
  </span>
)

export default SimpleHashTag
