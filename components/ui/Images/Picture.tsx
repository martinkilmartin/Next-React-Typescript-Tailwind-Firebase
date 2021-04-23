import { ReactNode } from 'react'

import PictureSource from './PictureSource'

import { IMAGE_TYPES } from '../../../constants/images'

type Props = {
  sources?: [ReactNode]
  srcSet: string
  sizes: string
  src: string
  alt?: string
}

const Picture = ({ src, srcSet, alt = 'Image' }: Props) => (
  <picture>
    {IMAGE_TYPES.map((pictureSourceType) => {
      return <PictureSource type={pictureSourceType.type} srcSet={srcSet} />
    })}

    <img src={src} alt={alt} />
  </picture>
)

export default Picture
