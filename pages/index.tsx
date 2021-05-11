import React from 'react'
import Color from 'color'
import { GetStaticProps } from 'next'

import Layout from '../components/layouts/Layout'
import MyHead from '../components/landmarks/MyHead'
import Header from '../components/landmarks/Header'
import Main from '../components/landmarks/Main'
import SimpleButton from '../components/ui/Buttons/SimpleButton'
import Picture from '../components/ui/Images/Picture'

import StackedCard from '../components/ui/Cards/StackedCard'

import ImageBackground from '../components/ui/Images/ImageBackground'
import 'tailwindcss/tailwind.css'

type Props = {
  baseURL: string
}

const IndexPage = ({ baseURL }: Props) => (
  <Layout>
    <MyHead
      title="Michael Cowell Irish Tours"
      description="I would be happy to contribute to a successful tour of Ireland."
      ogImage={`${baseURL}/img/xxl/conor-luddy-coliemore-harbour-dublin-ireland-2400w.jpg`}
      ogImageAlt="Conor Luddy's photo of Coliemore Harbour, Dublin."
      ogSiteName="MCT Irish Tours"
      ogURL={baseURL}
      icon="/logo-light.svg"
      maskIcon="/logo-light.svg"
      maskIconColor={new Color('green')}
    />
    <ImageBackground backgroundImage="bg-doonagoreXS sm:bg-doonagoreSM md:bg-doonagoreMD lg:bg-doonagoreLG xl:bg-doonagoreXL 2xl:bg-doonagoreXXL">
      <Header />
      <Main>
        <h1 className="mt-8 font-serif text-2xl font-bold text-center text-black sm:text-5xl sm:mt-24 drop-shadow">
          Michael Cowell Irish Tours
        </h1>
        <h2 className="mt-8 font-serif font-bold text-center text-black text-1xl sm:text-3xl drop-shadow">
          Individually tailored and specialized tours
        </h2>
        <div className="mt-8 text-center">
          <SimpleButton label="Book Now" />
        </div>
      </Main>
    </ImageBackground>
    <div className="flex flex-col p-2 -mt-12 content-evenly sm:-mt-16 sm:flex-row bg-gray-90">
      <StackedCard
        description="Our tour planning department will happily plan, book, and coordinate
            all tour plans, from airport transfers to coach hire and tour guide
            booking, hotel bookings, restaurant &amp; attractions, all your
            requirements in one complete itinerary from your arrival in Ireland
            until your departure."
        title="Click below to learn about the tour packages we offer."
        image={
          <Picture
            src="henrique-craveiro-cliffs-of-moher-co-clare-ireland"
            alt="henrique-craveiro-cliffs-of-moher-co-clare-ireland"
            width={2400}
            height={1600}
          />
        }
      />
      <StackedCard
        description="Our tour planning department will happily plan, book, and coordinate
            all tour plans, from airport transfers to coach hire and tour guide
            booking, hotel bookings, restaurant &amp; attractions, all your
            requirements in one complete itinerary from your arrival in Ireland
            until your departure."
        title="Click below to learn about the tour packages we offer."
        image={
          <Picture
            src="michael-skellig-michael-co-kerry-also-doubles-as-luke-skywalker-retreat-in-star-wars-ireland"
            alt="michael-skellig-michael-co-kerry-also-doubles-as-luke-skywalker-retreat-in-star-wars-ireland"
            width={2400}
            height={1600}
          />
        }
      />
      <StackedCard
        description="Our tour planning department will happily plan, book, and coordinate
            all tour plans, from airport transfers to coach hire and tour guide
            booking, hotel bookings, restaurant &amp; attractions, all your
            requirements in one complete itinerary from your arrival in Ireland
            until your departure."
        title="Click below to learn about the tour packages we offer."
        image={
          <Picture
            src="wynand-van-poortvliet-great-saltee-island-wexford-ireland"
            alt="wynand-van-poortvliet-great-saltee-island-wexford-ireland"
            width={2400}
            height={1600}
          />
        }
      />
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const baseURL: string = process.env.HOST ?? window.location.href
  return { props: { baseURL } }
}

export default IndexPage
