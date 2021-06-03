import Image from 'next/image'

import { hashCode } from '../../../lib/hashing'

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
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {testimonials.map((testimonial, index) => (
          <div className="p-4 mb-6 text-center lg:w-1/3 lg:mb-0">
            <Image
              src={testimonial.imgSrc}
              alt={testimonial.imgAlt}
              width={testimonial.imgWidth}
              height={testimonial.imgHeight}
            />
            <p className="leading-relaxed">{testimonial.testimonial}</p>
            <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-primary"></span>
            <h2 className="text-sm font-medium tracking-wider text-base-content title-font">
              {testimonial.author}
            </h2>
            <p className="text-base-content">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
