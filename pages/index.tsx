import React from "react";

import Layout from "../components/Layout";
import Main from "../components/Main";
import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout
    title="Michael Cowell Irish Tours"
    description="I would be happy to contribute to a successful tour of Ireland."
    styles="bg-doonagore bg-fixed bg-contain sm:bg-cover bg-no-repeat"
  >
    <Main>
      <h1 className="mt-8 text-2xl text-center text-white sm:text-5xl sm:mt-24 drop-shadow">
        Individually tailored and specialized tours
      </h1>
      <div className="bg-gray-50">
        <p>
          Our tour planning department will happily plan, book, and coordinate
          all tour plans, from airport transfers to coach hire and tour guide
          booking, hotel bookings, restaurant &amp; attractions, all your
          requirements in one complete itinerary from your arrival in Ireland
          until your departure.
        </p>
      </div>
    </Main>
  </Layout>
);

export default IndexPage;
