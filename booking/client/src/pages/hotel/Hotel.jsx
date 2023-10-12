import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/h1.jpeg"
import b from "../../images/h3.jpeg"
import c from "../../images/h4.jpeg"
import d from "../../images/h5.jpeg"
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

const Hotel = () => {
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
          <h1 className="hotelTitle">Rajhans Hotels</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tilak Road ,Manali</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs 2000 at this property and get a free airport taxi
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
              Located in Manali, Rajhans Hotel offers air-conditioned accommodations with free WiFi. The rooms feature hardwood floors, a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with a shower and hairdryer. A fridge, electric kettle, and coffee machine are also provided. Nearby attractions include popular spots like Cloth Hall, Main Market Square, and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km away, with a paid airport shuttle service available at the property.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Manali, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs 10,000</b> (5 nights)
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

export default Hotel;