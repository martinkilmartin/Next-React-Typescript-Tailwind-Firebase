export type LINK = {
  path: string
  text: string
  icon?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export type GROUP_LINKS = {
  title: string
  links: LINK[]
}

export type CAROUSEL_ITEM = {
  label: string
  src: string
  alt: string
  title: string
  description: string
}
