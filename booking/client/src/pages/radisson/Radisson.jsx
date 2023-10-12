import "./radisson.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import a from "../../images/q.jpg"
import b from "../../images/qwsa.jpg"
import c from "../../images/e.jpeg"
import d from "../../images/asd.jpg"
import e from "../../images/t.jpeg"
import f from "../../images/zxc.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Radisson = () => {
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
          <h1 className="hotelTitle">Radisson Blu</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Linkin Road , Mumbai</span>
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
              Radisson Blu Mumbai is a stylish and contemporary hotel in the heart of Mumbai. With its modern design, comfortable rooms, and convenient location, it's a top choice for travelers seeking a memorable stay in this bustling city.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a long weekend!</h1>
              <span>
                Located in the heart of Mumbai, this property has an
                excellent location score of 9.1!
              </span>
              <h2>
                <b>Rs 4000</b> (Per night)
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

export default Radisson;