import Avatar from './Avatar'

type Props = {
  images: JSX.Element[]
}

const Grouped = ({ images }: Props) => (
  <div className="-space-x-6 avatar-group">
    {images.map((image, index) => (
      <Avatar image={image} index={index} />
    ))}
  </div>
)

export default Grouped
