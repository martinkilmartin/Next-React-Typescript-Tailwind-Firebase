export type Product = {
  imgSrc: string
  imgAlt: string
  imgWidth: number
  imgHeight: number
  title: string
  description: string[]
  category: string
  location: string
  price: string
  cta: string
  offer: Offer
}

type Offer = {
  type: '%' | '€' | null
  amount: number | null
}
