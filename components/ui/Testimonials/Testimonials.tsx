import TestimonialCard from '../Cards/TestimonialCard'
import { TESTIMONIALS } from '../../../constants/testimonials'

const Testimonials = () => (
  <section className="text-base-content body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="prose prose-xl text-center max-w-none">
        <h2>Reviews</h2>
        <h3>What our customers have to say</h3>
      </div>
      <div className="flex flex-wrap -m-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
