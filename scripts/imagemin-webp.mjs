import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import { IMAGE_PATH, IMAGE_PATHS, IMAGE_SIZES } from './constants/images.mjs'
;(async () => {
  console.log('webpeeingEm')
  for (const [key, value] of Object.entries(IMAGE_SIZES)) {
    await imagemin([`${IMAGE_PATH + IMAGE_PATHS[key]}/*.jpg`], {
      destination: `${IMAGE_PATH + IMAGE_PATHS[key]}`,
      plugins: [imageminWebp({ preset: 'photo', quality: 75, method: 6 })],
    })
  }
  console.log('webpeedEm')
})()
