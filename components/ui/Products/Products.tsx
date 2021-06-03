import Image from 'next/image'

import { hashCode } from '../../../lib/hashing'

const products = [
  {
    title: 'Sensory',
    content: [
      'We always want to make people feel something with our work, to awaken their desire for discovery.',
      'If it doesn’t evoke a sight, a smell, a sound, a touch or a taste, it is not going far enough to stoke the desire for discovery.',
    ],
    imgSrc:
      '/img/originals/michael-skellig-michael-co-kerry-also-doubles-as-luke-skywalker-retreat-in-star-wars-ireland.jpg',
    imgAlt:
      'Sceilg Mhichíl is an outstanding, and in many respects unique, example of an early religious settlement deliberately sited on a pyramidal rock in the ocean, preserved because of a remarkable environment. It illustrates, as no other property can, the extremes of a Christian monasticism characterizing much of North Africa, the Near East, and Europe.',
    imgWidth: 2400,
    imgHeight: 1600,
    price: '€999',
    cta: 'Add to cart',
  },
  {
    title: 'Human',
    content: [
      'We understand how the small moments in life can be the most epic.',
      'We look to make the small big by observing and celebrating those moments and in doing so we can create a powerful connection with our audience.',
    ],
    imgSrc: '/img/originals/gregory-dalleau-lough-tay-dublin-ireland.jpg',
    imgAlt:
      'Lough Tay is, along with Glendalough, one of the most photographed location in Wicklow.  The stunning scenery of the Lake surrounded by the mountains makes it one of the most iconic location in Ireland.',
    imgWidth: 2400,
    imgHeight: 1600,
    price: '€999',
    cta: 'Add to cart',
  },
  {
    title: 'Fresh',
    content: [
      'We always seek out the unexpected, even in the familiar.',
      'Novelty creates unforgettable moments of discovery that stay with you for a lifetime. We always want to show things from a different perspective or tell stories in a new way.',
    ],
    imgSrc:
      '/img/originals/wynand-van-poortvliet-great-saltee-island-wexford-ireland.jpg',
    imgAlt:
      "The Saltee Islands, St. George's Channel consisting of the Great and Little Saltee, are situated approximately 5 kilometers off the coast of Kilmore Quay Co.Wexford. The larger island Great Saltee is the most famous bird sanctuary in Ireland and is very popular with both day-trippers and birdwatchers alike. These Islands are privately owned by the Neale family and are one of the world's major bird sanctuaries.",
    imgWidth: 2400,
    imgHeight: 1600,
    price: '€999',
    cta: 'Add to cart',
  },
]

const Products = () => (
  <div className="px-4 py-12 mx-auto md:flex md:justify-center max-w-7xl sm:px-6 lg:px-8">
    {products.map((product, index) => (
      <div
        className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg md:mx-1 bg-base-100"
        key={`${product.title}-${index}`}
      >
        <Image
          src={product.imgSrc}
          alt={product.imgAlt}
          width={product.imgWidth}
          height={product.imgHeight}
        />
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold uppercase text-base-content">
            {product.title}
          </h1>
          {product.content.map((content) => (
            <p
              className="mt-1 text-sm text-base-content"
              key={`${hashCode(content)}-${index}`}
            >
              {content}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-primary">
          <h1 className="text-lg font-bold text-neutral-content">
            {product.price}
          </h1>
          <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-200 transform rounded text-neutral-content bg-accent hover:bg-secondary focus:bg-accent-focus focus:outline-none">
            {product.cta}
          </button>
        </div>
      </div>
    ))}
  </div>
)

export default Products
