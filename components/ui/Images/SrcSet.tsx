import {
  IMAGES_BASE_PATH,
  IMAGE_TYPES,
  IMAGE_SIZES,
} from '../../../constants/images'

type Props = {
  type: string
  src: string
}

const PictureSource = ({ type, src }: Props) => (
  <source type={type} srcSet={src} />
)

export default PictureSource
