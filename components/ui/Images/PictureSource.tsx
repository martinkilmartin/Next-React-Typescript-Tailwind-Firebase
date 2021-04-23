type Props = {
  type: string
  srcSet: string
}

const PictureSource = ({ type, srcSet }: Props) => (
  <source type={type} srcSet={srcSet} />
)

export default PictureSource
