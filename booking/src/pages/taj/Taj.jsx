import "../radisson/radisson.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/tt.jpg"
import b from "../../images/tt1.jpg"
import c from "../../images/tt3.jpg"
import d from "../../images/tt4.jpg"
import e from "../../images/tt5.jpg"
import f from "../../images/tt6.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Taj = () => {
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
          <h1 className="hotelTitle">Taj Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Behind Gateway of India , Mumbai</span>
          </div>
          <span className="hotelDistance">
            A Luxurious Suite is waiting for you!
          </span>
          <span className="hotelPriceHighlight">
            A stay you will remember forever!
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
              <h1 className="hotelTitle">The luxurious lifestyle</h1>
              <p className="hotelDesc">
              The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India. Built in the Indo-Saracenic style, it opened in 1903 as the Taj Mahal Hotel and has historically often been known simply as "The Taj". The hotel is named after the Taj Mahal, which is located in the city of Agra approximately 1,050 kilometres (650 mi) from Mumbai. It has been considered one of the finest hotels in the East since the time of the British Raj. The hotel was one of the main sites targeted in the 2008 Mumbai attacks.
             </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a long weekend!</h1>
              <span>
                Located in the heart of Mumbai, this property has an
                excellent location score of 9.5!
              </span>
              <h2>
                <b>Rs 7000</b> (Per night)
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

export default Taj;