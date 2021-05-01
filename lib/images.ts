// Creates a space separated list of image path names with sizes
/* '/img/xxl/abc-2400w.webp|jpg 2400w, 
    /img/xl/abc-1920w.webp|jpg 1920w, 
    /img/lg/abc-1280w.webp|jpg 1280w,
    /img/md/abc-800w.webp|jpg 800w,
    /img/xs/abc-500w.webp|jpg 500w,
    /img/xxs/abc-300w.webp|jpg 300w,
*/

import { IMAGES_BASE_PATH, IMAGE_SIZES } from '../constants/images'

import { ImageSize } from '../interfaces'

export const generateSrcSet = (src: string, suffix: string): string => {
  let srcSet = ''
  IMAGE_SIZES.forEach((imgSize: ImageSize) => {
    srcSet += `${IMAGES_BASE_PATH}${imgSize.id}/${src}-${imgSize.size}w${suffix} ${imgSize.size}w, `
  })
  return srcSet ?? ''
}
