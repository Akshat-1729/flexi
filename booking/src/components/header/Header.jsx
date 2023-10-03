import {
  faBed,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "container headerContainer listMode" : "container headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem">
            <a href="/" className="hi" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </a>
          </div>
          <div className="headerListItem">
            <a href="/flight" className="hi" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </a>
          </div>
          <div className="headerListItem">
            <a href="/car" className="hi" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faCar} />
              <span>Rentals</span>
            </a>
          </div>
          <div className="headerListItem">
            <a href="/attraction" className="hi" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </a>
          </div>
          <div className="headerListItem">
            <a href="/taxis" className="hi" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faTaxi} />
              <span> Airport taxis</span>
            </a>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free SIT Travel account
            </p>
            <button className="headerBtn">
            <a href="/register" style={{ textDecoration: 'none' }}>Sign Up / Register</a>
            </button>
            <div className="headerSearch d-flex justify-content-between align-items-center p-3">
  <div className="headerSearchItem flex-grow-1 border-end">
    <FontAwesomeIcon icon={faBed} className="headerIcon me-2" />
    <input
      type="text"
      placeholder="Where are you going?"
      className="form-control headerSearchInput"
    />
  </div>
  <div className="headerSearchItem flex-grow-1 border-end">
    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon me-2" />
    <span
      onClick={() => setOpenDate(!openDate)}
      className="headerSearchText"
    >
      {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
        date[0].endDate,
        "MM/dd/yyyy"
      )}`}
    </span>
    {openDate && (
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="date"
      />
    )}
  </div>
  <div className="headerSearchItem flex-grow-1 border-end">
    <FontAwesomeIcon icon={faBed} className="headerIcon me-2" />
    <span
      onClick={() => setOpenOptions(!openOptions)}
      className="headerSearchText"
    >
      {`${options.adult} Adult ${options.children} Children ${options.room} Room`}
    </span>
    {openOptions && (
      <div className="options">
        <div className="optionItem">
          <span className="optionText">Adult </span>
          <div className="optionCounter">
            <button
              className="optionCounterButton"
              disabled={options.adult <= 1}
              onClick={() => handleOption("adult", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button
              className="optionCounterButton"
              onClick={() => handleOption("adult", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className="optionItem">
          <span className="optionText">Children </span>
          <div className="optionCounter">
            <button
              className="optionCounterButton"
              disabled={options.children <= 1}
              onClick={() => handleOption("children", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.children}</span>
            <button
              className="optionCounterButton"
              onClick={() => handleOption("children", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className="optionItem">
          <span className="optionText">Room</span>
          <div className="optionCounter">
            <button
              className="optionCounterButton"
              disabled={options.room <= 1}
              onClick={() => handleOption("room", "d")}
            >
              -
            </button>
            <span className="optionCounterNumber">{options.room}</span>
            <button
              className="optionCounterButton"
              onClick={() => handleOption("room", "i")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="headerSearchItem flex-grow-0">
    <button className="headerBtn">Search</button>
  </div>
</div>

          </>
        )}
      </div>
    </div>
  );
};

export default Header;
