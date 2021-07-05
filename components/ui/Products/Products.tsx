import Image from 'next/image'

import { PRODUCTS } from '../../../constants/products'

const Products = () => (
  <section className="text-base-content body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="prose prose-xl text-center max-w-none">
        <h2>Customer Favourites</h2>
        <h3>Our most popular tours</h3>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {PRODUCTS.slice(0, 3).map((product, index) => (
          <div
            className="max-w-xs mx-auto mb-4 overflow-hidden rounded-lg shadow-lg md:mb-0 md:mx-0 bg-base-100"
            key={`${product.title}-${index}`}
          >
            <Image
              src={product.imgSrc}
              alt={product.imgAlt}
              width={product.imgWidth}
              height={product.imgHeight}
            />
            <div className="px-4 py-2">
              <h2 className="text-3xl font-bold uppercase text-base-content">
                {product.title}
              </h2>
              {product.description.slice(0, 1).map((description) => (
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
        ))}
      </div>
    </div>
  </section>
)

export default Products
