import Image from 'next/image'

import Avatar from '../../ui/Avatars/Avatar'
import { Testimonial } from '../../../interfaces'

import { hashCode } from '../../../lib/hashing'

type Props = {
  testimonial: Testimonial
  index: number
}

const TestimonialA = ({ testimonial, index }: Props) => (
  <div
    className="p-4 mb-6 text-center lg:w-1/3 lg:mb-0"
    key={`${hashCode(testimonial.testimonial)}-${index}`}
  >
    <Avatar
      image={
        <Image
          src={testimonial.imgSrc}
          alt={testimonial.imgAlt}
          width={testimonial.imgWidth}
          height={testimonial.imgHeight}
        />
      }
    />
    <p className="leading-relaxed">{testimonial.testimonial}</p>
    <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-primary"></span>
    <h2 className="text-sm font-medium tracking-wider text-base-content title-font">
      {testimonial.author}
    </h2>
    <p className="text-base-content">{testimonial.location}</p>
  </div>
)

export default TestimonialA
