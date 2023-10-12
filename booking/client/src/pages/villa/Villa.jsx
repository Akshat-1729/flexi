import "./villa.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/ab.jpg"
import b from "../../images/abc.jpg"
import c from "../../images/abcd.jpeg"
import d from "../../images/abcde.jpg"
import e from "../../images/abcdef.jpg"
import f from "../../images/abcdefg.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Villa = () => {
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
          <h1 className="hotelTitle">Ashish Villas</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ghat Road, Kullu</span>
          </div>
          <span className="hotelDistance">
            Stay in the beauty of nature. Ample options to choose from.
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over at this luxurious villa to experience the ultimate freshness.
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
              Nestled in the heart of Kullu, Ashish Villa is a serene haven surrounded by the beauty of nature. With lush forests, pristine rivers, and the majestic Himalayas as its backdrop, this charming villa offers a peaceful escape. Its architecture harmonizes seamlessly with the environment, and every corner offers breathtaking views. Whether you're an adventure seeker or simply in search of tranquility, Ashish Villa provides an unforgettable nature retreat.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a long weekend!</h1>
              <span>
                Located in Nature's Lap, this property has an
                excellent location score of 9.1!
              </span>
              <h2>
                <b>Rs 8000</b> (Per night)
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

export default Villa;