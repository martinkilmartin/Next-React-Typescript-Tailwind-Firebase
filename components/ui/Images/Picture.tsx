// <picture>
//   <source type="image/jpg" srcset="img-300w.jpg 300w img-500w.jpg 500w ...">
//   <source type="image/webp" srcset="img-300w.webp 300w img-500w.webp 500w ...">
//   <img src="img.jpg" alt="Adding alternative text to photos is first and foremost a principle of web accessibility."
//    width="2400" height="1600">
// </picture>

import PictureSource from './PictureSource'

import {
  DEFAULT_IMAGES_BASE_PATH,
  DEFAULT_IMAGES_SUFFIX,
  IMAGE_TYPES,
} from '../../../constants/images'

type Props = {
  src: string
  alt: string
  width: number
  height: number
}

const Picture = ({ src, alt, width, height }: Props) => (
  <picture>
    {IMAGE_TYPES.map((pictureSourceType) => {
      return (
        <PictureSource
          src={src}
          suffix={pictureSourceType.suffix}
          type={pictureSourceType.type}
          key={pictureSourceType.type}
        />
      )
    })}
    <img
      src={DEFAULT_IMAGES_BASE_PATH + src + DEFAULT_IMAGES_SUFFIX}
      alt={alt}
      width={width}
      height={height}
    />
  </picture>
)

export default Picture
