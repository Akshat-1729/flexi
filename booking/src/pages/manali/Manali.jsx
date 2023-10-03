import "../attraction/attraction.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import m1 from "../../images/m1.jpg";
import m2 from "../../images/m2.jpg";
import m3 from "../../images/m3.jpg";
import m4 from "../../images/m4.jpg";
import m5 from "../../images/m5.jpg";
import m6 from "../../images/m6.jpg";


const Manali = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
    <div className="outerBox">
    <div className="searchItem img-box">
      <img
        src={m1}
        alt=""
        className="siImg"
      />
      </div>
      <div className="searchItem img-box">
      <img
        src={m2}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={m3}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={m4}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={m5}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={m6}
        alt=""
        className="siImg"
      />
      </div>

    </div>
  </div>
  );
};

export default Manali;