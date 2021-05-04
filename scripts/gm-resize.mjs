import fs from 'fs'
import gm from 'gm'
import { IMAGE_PATH, IMAGE_PATHS, IMAGE_SIZES } from './constants/images.mjs'
;(async () => {
  gm.subClass({ imageMagick: true })
  return fs.readdir(IMAGE_PATH + IMAGE_PATHS.ORIG_FILES, (error, files) => {
    if (error) console.error(error)
    const FILE_COUNT = files.length
    const FILE_NAME_SANS_EXT = /\.[^/.]+$/
    const FILE_EXT_ONLY = /\.[0-9a-z]+$/
    console.log('resizing ' + FILE_COUNT + ' images')
    files.forEach((file) => {
      const CURRENT_FILE_NAME = file.replace(FILE_NAME_SANS_EXT, '')
      const CURRENT_FILE_EXT = file.match(FILE_EXT_ONLY)[0]
      for (const [key, size] of Object.entries(IMAGE_SIZES)) {
        gm(`${IMAGE_PATH + IMAGE_PATHS.ORIG_FILES}/${file}`)
          .resize(size)
          .noProfile()
          .write(
            `${
              IMAGE_PATH + IMAGE_PATHS[key]
            }/${CURRENT_FILE_NAME}-${size}w${CURRENT_FILE_EXT}`,
            function (err) {
              if (err) console.error(err)
            }
          )
      }
    })
    console.log(FILE_COUNT + ' images resized')
  })
})()
