import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FlightItem from '../../components/carItem/CarItem';
import CarItem from '../../components/carItem/CarItem';


const Car = () => {
  const [isResponsive, setIsResponsive] = useState(
    window.innerWidth <= 768
  );
  const [isSearchOpen, setIsSearchOpen] = useState(!isResponsive); // Open by default in normal mode

  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
    setIsSearchOpen(isResponsive ? false : true); // Open search box when switching to normal mode
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    // Close the search box when switching to responsive mode
    if (isResponsive) {
      setIsSearchOpen(false);
    }
  }, [isResponsive]);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div
            className={`listSearch ${
              isResponsive && isSearchOpen ? 'open' : ''
            }`}
          >
            <h1
              className="lsTitle"
              onClick={toggleSearch}
            >
              Search
            </h1>
            {isResponsive || isSearchOpen ? (
              <div className="lsContent">
                <div className="lsItem">
                  <label>Destination</label>
                  <input
                    placeholder={destination}
                    type="text"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="lsItem">
                  <label>Check-in Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(
                      date[0].startDate,
                      'MM/dd/yyyy'
                    )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                  </span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>
               
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Min price</span>
                      <input
                        type="number"
                        className="lsOptionInput"
                        onChange={(e) =>
                          setOptions({ ...options, minPrice: e.target.value })
                        }
                      />
                      
                    </div>
                    
                  
                
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Max price</span>
                      <input
                        type="number"
                        className="lsOptionInput"
                        onChange={(e) =>
                          setOptions({ ...options, minPrice: e.target.value })
                        }
                      />
                      
                    </div>
                    
                  
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Adults</span>
                      <input
                        type="number"
                        className="lsOptionInput"
                        onChange={(e) =>
                          setOptions({ ...options, minPrice: e.target.value })
                        }
                      />
                      
                    </div>
                    
                 
                
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Children</span>
                      <input
                        type="number"
                        className="lsOptionInput"
                        onChange={(e) =>
                          setOptions({ ...options, minPrice: e.target.value })
                        }
                      />
                      
                    </div>
                    
                  
                <button className="btn btn-primary">Search</button>
              </div>
            ) : null}
          </div>
          <div className="listResult">
            <CarItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
