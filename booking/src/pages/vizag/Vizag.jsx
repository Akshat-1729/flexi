import "../attraction/attraction.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import v1 from "../../images/v1.jpg";
import v2 from "../../images/v2.jpg";
import v3 from "../../images/v3.jpg";
import v4 from "../../images/v4.jpg";
import v5 from "../../images/v5.jpg";
import v6 from "../../images/v6.jpg";


const Vizag = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
    <div className="outerBox">
    <div className="searchItem img-box">
      <img
        src={v1}
        alt=""
        className="siImg"
      />
      </div>
      <div className="searchItem img-box">
      <img
        src={v2}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={v3}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={v4}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={v5}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={v6}
        alt=""
        className="siImg"
      />
      </div>

    </div>
  </div>
  );
};

export default Vizag;