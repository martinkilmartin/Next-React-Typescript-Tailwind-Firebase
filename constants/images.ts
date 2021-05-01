import { ImageSize, ImageType } from '../interfaces'

export const DEFAULT_IMAGES_BASE_PATH = '/img/originals/'
export const DEFAULT_IMAGES_SUFFIX = '.jpg'

export const IMAGES_BASE_PATH = '/img/'

export const IMAGE_TYPES: ImageType[] = [
  { type: 'image/webp', suffix: '.webp' },
  { type: 'image/jpeg', suffix: '.jpg' },
]

export const IMAGE_SIZES: ImageSize[] = [
  { id: 'xxl', size: 2400, media: '(min-width: 2048px)' },
  { id: 'xl', size: 1920, media: '(min-width: 1920px)' },
  { id: 'lg', size: 1536, media: '(min-width: 1200px)' },
  { id: 'md', size: 1280, media: '(min-width: 1080px)' },
  { id: 'sm', size: 800, media: '(min-width: 750px)' },
  { id: 'xs', size: 500, media: '(min-width: 400px)' },
  { id: 'xxs', size: 300, media: '(max-width: 399px)' },
]
