import React from "react";
import Banner from "../components/Banner";
import AboutEvent from "../components/AboutEvent";
import EventSchedule from "../components/EventSchedule";

function HomePage() {
  return (
    <div>
      <Banner />
      <AboutEvent />
      <EventSchedule />
    </div>
  );
}

export default HomePage;
