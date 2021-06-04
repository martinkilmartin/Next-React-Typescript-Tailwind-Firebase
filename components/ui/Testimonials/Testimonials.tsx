import Image from 'next/image'

import { hashCode } from '../../../lib/hashing'

import Testimonial from './Testimonial'

const testimonials = [
  {
    testimonial:
      'Would highly recommend MCT Irish Tours and their Magic Moments tour! Driver Michael was fantastic - very friendly, knowledgeable and a good laugh. The tour was timed very well, and you see a lot of sights for your money.',
    author: 'Yasmin Saikia',
    location: 'Mumbai, India',
    imgSrc: '/img/profiles/yasmin.jpg',
    imgAlt: 'Yasmin Saikia wearing a shalwar kameez',
    imgWidth: 300,
    imgHeight: 300,
  },
  {
    testimonial:
      "I chose this tour after reading numerous reviews. You will not be disappointed as everything said is true. Had a blast visiting the different sites in Ireland. Our driver Michael was giving nice commentary during the drive between places. This might have been the best coach tour I've had, just like Michael promised.",
    author: 'Manni Huang',
    location: 'Beijing, China',
    imgSrc: '/img/profiles/manni.jpg',
    imgAlt: 'Manni Huang smiling for the camera',
    imgWidth: 300,
    imgHeight: 300,
  },
  {
    testimonial:
      'What makes this experience so much more than going by yourself is MICHAEL!!! Not only can he drive those narrow roads in a huge tour bus with his eyes closed... he will give you history, education, and many jokes as you go from one location to the next. The timing at each location was appropriate and efficient to see many sites in one day. ',
    author: 'Sandra Spelling',
    location: 'San Diego, CA, USA',
    imgSrc: '/img/profiles/sandra.jpg',
    imgAlt: 'Sandra Spelling smiling for the camera',
    imgWidth: 300,
    imgHeight: 300,
  },
]

const Testimonials = () => (
  <section className="text-base-content body-font">
    <div className="container px-5 py-8 mx-auto">
      <div className="prose prose-xl text-center max-w-none">
        <h2>Reviews</h2>
        <h3>What our customers have to say</h3>
      </div>
      <div className="flex flex-wrap -m-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
