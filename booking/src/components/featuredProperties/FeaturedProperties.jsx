import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  try {
    return (
      <div className="fp">
        <div className="fpItem">
          <a href="/radisson">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          </a>
          <span className="fpName">Radisson Blu</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from 4000 rs</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <a href="/resort">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fpImg"
          />
          </a>
          <span className="fpName">Hotel Taj</span>
          <span className="fpCity">Srinagar</span>
          <span className="fpPrice">Starting from 2000Rs</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <a href="/resort">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          </a>
          <span className="fpName">Hotel Riverdale</span>
          <span className="fpCity">Delhi</span>
          <span className="fpPrice">Starting from 6000Rs</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <a href="/resort">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fpImg"
          />
          
          </a>
          <span className="fpName">Myths Garden Inn</span>
          <span className="fpCity">Kerela</span>
          <span className="fpPrice">Starting from 3000Rs</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors here, e.g., log the error, send it to an error tracking service
    // For now, return an error message to display to the user
    return <div>Error: {error.message}</div>;
  }
};

export default FeaturedProperties;