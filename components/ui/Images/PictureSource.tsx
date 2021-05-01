import { IMAGES_BASE_PATH, IMAGE_SIZES } from '../../../constants/images'

import { ImageSize } from '../../../interfaces'

type Props = {
  src: string
  suffix: string
  type: string
}

const PictureSource = ({ type, src, suffix }: Props) => (
  <>
    {IMAGE_SIZES.map((imgSize: ImageSize) => {
      return (
        <source
          media={imgSize.media}
          type={type}
          srcSet={`${IMAGES_BASE_PATH}${imgSize.id}/${src}-${imgSize.size}w${suffix} ${imgSize.size}w`}
          key={`${src}-${imgSize.size}w${suffix}`}
        />
      )
    })}
  </>
)
export default PictureSource
