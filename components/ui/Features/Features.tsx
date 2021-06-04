import { Lighthouse } from '../../icons/Accomodation'
import { Bus } from '../../icons/Travel'
import { Pamphlet } from '../../icons/Travel'
import { HotPot } from '../../icons/Food'

const features = [
  {
    name: 'Accommodation',
    description:
      'From camping, to 2 Star, 3 Star, 4, star 5, Star, thatched cottages, castle hotels, farmhouses, and (B/B) bed and breakfast houses, and even lighthouses, we have about ten of them, ultimately the decision it up to you, on this one, your tour guide will be happy to advise you on your needs and the wright hotel for your tour needs.',
    icon: Lighthouse,
  },
  {
    name: 'Coach Travelling',
    description:
      'While coach is not for everyone, in Ireland coach travel on tours is  an excellent standard, most coaches are equipped to a executive level, wifi, ac, fridge, DvD /cd, Toilet, 3 Point seatbelts, First aid, Fire Extinguish Equipment, Comfort stops for toilet breaks can and are often used to avoid the use of the coach toilet, traveling time from one attraction to another is part of the planning of your tour guide, who in any event would have your overall comfort In mind on that day traveling.',
    icon: Bus,
  },
  {
    name: 'Attractions',
    description:
      'Typically all attractions are pre-booked before the tour starts. If you are not sure of the attraction you wish to see, ask your Tour Guide, as they can give you informed information, regarding time and distance involving your tour.',
    icon: Pamphlet,
  },
  {
    name: 'Food',
    description:
      'Overall food in Ireland is of very high standard, all food service personal attend course in Cooking, Storage, food handling and Foods service, cooking time and temperatures, display of cool food, and personal hygiene, and that of the general work area, Water is fine to drink or brush your teeth, but you may still boil your hotel water. As long as you feel safe, and happy.',
    icon: HotPot,
  },
]

const Features = () => (
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 text-base-content">
    <div className="prose prose-xl text-center max-w-none">
      <h2>Why Choose MCT Irish Tours?</h2>
      <h3>Touring Ireland is second nature for us.</h3>
      <p>
        Our tour planning department will happily plan, book, and coordinate all
        tour plans, from airport transfers to coach hire and tour guide booking,
        hotel bookings, restaurant &amp; attractions, all your requirements in
        one complete itinerary from your arrival in Ireland until your
        departure.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <feature.icon className="float-left w-12 h-12 py-2 mr-2 rounded-xl lg:w-24 lg:h-24 ring ring-primary ring-offset-base-100 ring-offset-4" />
              <p className="px-2 ml-16 text-lg font-medium leading-6 lg:ml-32 text-primary-content bg-primary rounded-2xl">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base lg:ml-32">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
)

export default Features
