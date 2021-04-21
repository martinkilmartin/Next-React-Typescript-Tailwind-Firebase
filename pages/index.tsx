import React from "react";

import Image from "next/image";

import Layout from "../components/Layout";
import MyHead from "../components/MyHead";
import Header from "../components/Header";
import Main from "../components/Main";
import SimpleButton from "../components/ui/Buttons/SimpleButton";

import StackedCard from "../components/ui/Cards/StackedCard";

import ImageBackground from "../components/ImageBackground";
import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout>
    <MyHead
      title="Michael Cowell Irish Tours"
      description="I would be happy to contribute to a successful tour of Ireland."
    />
    <ImageBackground styles="bg-doonagore relative bg-responsive bg-cover bg-no-repeat min-h-3/4">
      <Header />
      <Main>
        <h1 className="mt-8 font-serif text-2xl font-bold text-center text-white inherit sm:text-5xl sm:mt-24 drop-shadow">
          Michael Cowell Irish Tours
        </h1>
        <h2 className="mt-8 font-serif font-bold text-center text-white sm:bg-opacity-0 text-1xl inherit sm:text-3xl drop-shadow">
          Individually tailored and specialized tours
        </h2>
        <div className="mt-8 text-center">
          <SimpleButton label="Book Now" />
        </div>
      </Main>
    </ImageBackground>
    <div className="p-2 -mt-16 bg-gray-90">
        <StackedCard
          description="Our tour planning department will happily plan, book, and coordinate
            all tour plans, from airport transfers to coach hire and tour guide
            booking, hotel bookings, restaurant &amp; attractions, all your
            requirements in one complete itinerary from your arrival in Ireland
            until your departure."
          title="Click below to learn about the tour packages we offer."
          image={
            <Image
              className="w-full"
              src="/img/henrique-craveiro-Cliffs-of-Moher-Co-Clare.webp"
              alt="Close"
              width={2400}
              height={1600}
            />
          }
        />
      </div>
  </Layout>
);

export default IndexPage;
