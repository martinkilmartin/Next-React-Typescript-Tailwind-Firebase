import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import { IMAGE_PATH, IMAGE_PATHS, IMAGE_SIZES } from './constants/images.mjs'
;(async () => {
  console.log('mozjpeggingEm')
  for (const [key, value] of Object.entries(IMAGE_SIZES)) {
    await imagemin([`${IMAGE_PATH + IMAGE_PATHS[key]}/*.jpg`], {
      destination: `${IMAGE_PATH + IMAGE_PATHS[key]}`,
      plugins: [imageminMozjpeg({ quality: 75, dct: 'int' })],
    })
  }
  console.log('mozjpeggedEm')
})()
