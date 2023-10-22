import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());     

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false)
      navigate("/")
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Rooms:</span>
            
            <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">King Room                     <input type="checkbox" />  </div>
                     <div className="rDesc">King size Bed , 1 Bathroom , 1 Balcony</div>
                    <div className="rMax">Max People: <b>2</b></div>
                    <div className="rPrice">100</div>
                </div>
            </div>
            <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">2 Bed Room                    <input type="checkbox" /></div>
                     <div className="rDesc">2 Single size Bed , 1 Bathroom , 1 Balcony</div>
                    <div className="rMax">Max People: <b>2</b></div>
                    <div className="rPrice">100</div>
                </div>
            </div>
            <div className="rItem">
                <div className="rItemInfo">
                    <div className="rTitle">Another Room                       <input type="checkbox" /></div>
                     <div className="rDesc">King size Bed , 1 Bathroom , 1 Balcony</div>
                    <div className="rMax">Max People: <b>2</b></div>
                    <div className="rPrice">100</div>
                </div>
            </div>
                
            <button onClick="handleClick" className="rButton">Reserve Now!</button>
      </div>
    </div>
  );
}; 

export default Reserve; 