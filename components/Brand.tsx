import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: string | number
  height: string | number
  styles?: string
}

const Brand = ({ src, alt, width, height, styles }: Props) => (
  <Image src={src} alt={alt} width={width} height={height} className={styles} />
)

export default Brand
