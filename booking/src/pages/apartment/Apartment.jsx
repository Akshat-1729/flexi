import "./apartment.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/a11.jpeg"
import b from "../../images/a2.jpeg"
import c from "../../images/a3.jpeg"
import d from "../../images/a6.jpeg"
import e from "../../images/h7.jpg"
import f from "../../images/h8.webp"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Apartment = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: a,
    },
    {
      src: b,
    },
    {
      src: c,
    },
    {
      src:d,
    },
    {
      src: e,
    },
    {
      src: f,
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Sudha Apartment</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Link Road ,Manali</span>
          </div>
          <span className="hotelDistance">
            Excellent location –4 km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs 5000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Located in Manali, Sudha Apartment offers comfortable air-conditioned accommodations with complimentary WiFi. The apartments boast hardwood floors and are equipped with a kitchenette featuring a microwave, a flat-screen TV, and a private bathroom with a shower and hairdryer. Additional amenities include a fridge, electric kettle, and coffee machine. Sudha Apartment is conveniently situated near popular attractions like Cloth Hall, Main Market Square, and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, approximately 16.1 km away, and the property provides a paid airport shuttle service for guests' convenience.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in the real heart of Manali, this property has an
                excellent location score of 8.5!
              </span>
              <h2>
                <b>Rs 9,000</b> (3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>



        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Apartment;