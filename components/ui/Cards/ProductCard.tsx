import { Product } from '../../../interfaces/index'
import Image from 'next/image'

type Props = {
  product: Product
  index: number
}

const ProductCard = ({ product, index }: Props) => (
  <div
    className="max-w-xs mx-auto mb-4 overflow-hidden rounded-lg shadow-lg md:mb-0 md:mx-0 bg-base-100"
    key={`${product.title}-${index}`}
  >
    <Image
      src={product.img.src}
      alt={product.img.alt}
      width={product.img.width}
      height={product.img.height}
    />
    <div className="px-4 py-2">
      <h2 className="text-3xl font-bold uppercase text-base-content">
        {product.title}
      </h2>
      {product.description.map((description) => (
        <p className="mt-1 text-sm text-base-content" key={index}>
          {description}
        </p>
      ))}
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-primary">
      <h3 className="text-lg font-bold text-neutral-content">
        {product.price}
      </h3>
      <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-200 transform rounded text-neutral-content bg-accent hover:bg-secondary focus:bg-accent-focus focus:outline-none">
        {product.cta}
      </button>
    </div>
  </div>
)

export default ProductCard
