import "./cabin.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/z.jpg"
import b from "../../images/y.jpg"
import c from "../../images/x.jpeg"
import d from "../../images/w.jpg"
import e from "../../images/s.jpg"
import f from "../../images/t.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cabin = () => {
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
          <h1 className="hotelTitle">Cooper Cabins</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tiger Point, Mahabaleshwar</span>
          </div>
          <span className="hotelDistance">
            Staying in a cabin is the perfect way to immerse yourself in nature's embrace.
          </span>
          <span className="hotelPriceHighlight">
          Book your stay in a cozy cabin today and experience the ultimate nature retreat.
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
              Cooper Cabins, nestled in the enchanting hill station of Mahabaleshwar, offer a charming escape into the serene Western Ghats. These cabins provide a unique opportunity to unwind and reconnect with nature. Surrounded by lush greenery, dense forests, and breathtaking valley views, Cooper Cabins ensure a tranquil and rejuvenating experience. Whether you're seeking adventure in the nearby hills or simply want to bask in the natural beauty, these cabins provide the perfect base for your Mahabaleshwar getaway.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a long weekend!</h1>
              <span>
                Located in Nature's beauty, this property has an
                excellent location score of 8.8!
              </span>
              <h2>
                <b>Rs 12,000</b> (3 Nights)
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

export default Cabin;