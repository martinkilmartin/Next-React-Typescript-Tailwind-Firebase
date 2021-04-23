import fs from 'fs'
import gm from 'gm'
import { IMAGE_PATH, IMAGE_PATHS, IMAGE_SIZES } from './constants/images.mjs'
;(async () => {
  gm.subClass({ imageMagick: true })
  return fs.readdir(IMAGE_PATH + IMAGE_PATHS.ORIG_FILES, (error, files) => {
    if (error) console.error(error)
    const FILE_COUNT = files.length
    console.log('resizing ' + FILE_COUNT + ' images')
    files.forEach((file) => {
      for (const [key, value] of Object.entries(IMAGE_SIZES)) {
        gm(`${IMAGE_PATH + IMAGE_PATHS.ORIG_FILES}/${file}`)
          .resize(value)
          .noProfile()
          .write(
            `${IMAGE_PATH + IMAGE_PATHS[key]}/${IMAGE_PATHS[key]}-${file}`,
            function (err) {
              if (err) console.error(err)
            }
          )
      }
    })
    console.log(FILE_COUNT + ' images resized')
  })
})()
