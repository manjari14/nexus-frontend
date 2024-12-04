import React, { useState, useEffect } from "react";
import "./Banner.css";
import sliderImg from "../assets/slider.png";
import secondSlide from "../assets/slider1.png";

function Banner() {
  const [slide, setSlide] = useState(1);
  const [imageSrc, setImageSrc] = useState(sliderImg);
  const [heading1, setHeading1] = useState(
    "Water Sustainability & Energy Transition"
  );
  const [heading2, setHeading2] = useState("Implications on GCC & the World");
  const [eventDetails, setEventDetails] = useState({
    date: "March 15-16, 2025",
    venue: "Manama, Kingdom of Bahrain",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slide === 1) {
      setImageSrc(sliderImg);
      setHeading1("Water Sustainability & Energy Transition");
      setHeading2("Implications on GCC & the World");
      setEventDetails({
        date: "March 15-16, 2025",
        venue: "Manama, Kingdom of Bahrain",
      });
    } else {
      setImageSrc(secondSlide);
      setHeading1("2nd Edition of the");
      setHeading2(
        "Kingdom of Bahrain's Initiative for Water, Energy & Climate Security and Sustainability"
      );
      setEventDetails({
        date: "April 22-23, 2025",
        venue: "Ritz-Carlton, Manama",
      });
    }
  }, [slide]);

  return (
    <div className="banner">
      <div className="banner-image">
        <img src={imageSrc} alt="Banner" className="banner-img" />
      </div>

      <div className="banner-content">
        <h1 className="animate-heading">{heading1}</h1>
        <h2 className="animate-heading">{heading2}</h2>
        <div className="event-details">
          <p className="event-date">📅 {eventDetails.date}</p>
          <p className="event-venue">📍 {eventDetails.venue}</p>
        </div>
      </div>
      <div className="line-animation line1"></div>
    </div>
  );
}

export default Banner;
