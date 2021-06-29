type Props = {
  title?: string
  content?: string[]
  outro?: string[]
}

const About = ({
  title = 'Please let me introduce myself.',
  content = [
    'I am Michael Cowell, founder, and owner of MCT Irish Tours. As a National Tour Guide and Tour Coach Driver touring Ireland is second nature for me and such enjoyment is hard to come by. I have been working in the hospitality industry since I left school, starting as a barman, working up to chargehand and key holder.',
    'Upon leaving Ireland I worked in the cruise industry from Cape Canaveral to Nassau in the Bahamas. After leaving this I worked on ships in Europe, on to Brazil, Argentina, and then onto the QE2 and twice around the world. On returning to Ireland, I took up driving and worked up to tour coaches. I also worked on my studies and obtained my National Tour Badge.',
    'I am now putting all this experience into tour planning, individually tailored and specialized tours are a part of MCT remit. Our tour planning department will happily plan, book, and coordinate all tour plans, from airport transfers to coach hire and tour guide booking, hotel bookings, restaurant & attractions, all your requirements in one complete itinerary from your arrival in Ireland until your departure.',
    'Please feel free to contact me. I would be happy to contribute to a successful tour of Ireland.',
  ],
  outro = [
    'Thank you for your time,',
    'Michael Cowell',
    'Stay Well & Stay Safe Yours in Tourism',
  ],
}: Props) => (
  <div className="min-h-screen hero bg-base-200">
    <div className="flex-col hero-content">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <div>
        {content.map((line: string, index: number) => (
          <p className="mb-5" key={index}>
            {line}
          </p>
        ))}
        <p className="mb-5">
          {outro.map((out: string, index: number) => (
            <span key={index}>
              {out}
              <br />
            </span>
          ))}
        </p>
      </div>
      <img
        src="https://i0.wp.com/mct-irish-tours.com/wp-content/uploads/2021/02/Screenshot-2021-02-12-at-15.54.36.png"
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  </div>
)

export default About
