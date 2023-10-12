import "../radisson/radisson.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/n1.jpg"
import b from "../../images/n2.jpg"
import c from "../../images/n4.jpg"
import d from "../../images/n5.jpg"
import e from "../../images/3.jpg"
import f from "../../images/6.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Novotel = () => {
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
          <h1 className="hotelTitle">NovotelHotels</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Viman Nagar ,Pune</span>
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
              Novotel Pune, one of the finest business hotels in the city that celebrates life, accentuates every occasion with zeal making it ideal for both- business trips & stay-cations within the city. The hotel offers 223 ergonomically designed rooms including suites, 5 dining options serving global cuisine & 11,000 sq ft of banqueting space with an elegantly designed divisible ballroom accommodating up to 300 guests and 6 Meeting Rooms with a capacity of 10-60 guests
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a long weekend!</h1>
              <span>
                Located in the heart of Pune, this property has an
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

export default Novotel;