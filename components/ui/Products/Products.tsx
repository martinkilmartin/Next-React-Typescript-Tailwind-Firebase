import { Product } from '../../../interfaces/index'
import ProductCard from '../Cards/ProductCard'

type Props = {
  products: Product[]
}

const Products = ({ products }: Props) => (
  <section className="text-base-content body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="prose prose-xl text-center max-w-none">
        <h2>Customer Favourites</h2>
        <h3>Our most popular tours</h3>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {products.slice(0, 3).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  </section>
)

export default Products
