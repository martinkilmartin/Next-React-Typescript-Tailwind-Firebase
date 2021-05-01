// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type ImageSize = {
  id: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  size: 2400 | 1920 | 1536 | 1280 | 800 | 500 | 300
  media:
    | '(min-width: 2048px)'
    | '(min-width: 1920px)'
    | '(min-width: 1200px)'
    | '(min-width: 1080px)'
    | '(min-width: 750px)'
    | '(min-width: 400px)'
    | '(max-width: 399px)'
}

export type ImageType = {
  type: 'image/webp' | 'image/jpeg'
  suffix: '.webp' | '.jpg'
}
