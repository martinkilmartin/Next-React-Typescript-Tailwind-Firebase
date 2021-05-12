import Picture from '../Picture/Picture'

type Props = {
  src: string
  alt: string
  width: number
  height: number
}

const Image = ({ src, alt, width, height }: Props) => (
  <div>
    <a href="#">
      <Picture src={src} alt={alt} width={width} height={height} />
    </a>
  </div>
)
export default Image
