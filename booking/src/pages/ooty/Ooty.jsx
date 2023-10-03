import "../attraction/attraction.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import o1 from "../../images/o1.jpg";
import o2 from "../../images/o2.jpg";
import o3 from "../../images/o3.jpg";
import o4 from "../../images/o4.jpg";
import o5 from "../../images/o5.jpg";
import o6 from "../../images/o6.jpg";


const Ooty = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
    <div className="outerBox">
    <div className="searchItem img-box">
      <img
        src={o1}
        alt=""
        className="siImg"
      />
      </div>
      <div className="searchItem img-box">
      <img
        src={o2}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={o3}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={o4}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={o5}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem img-box">
      <img
        src={o6}
        alt=""
        className="siImg"
      />
      </div>

    </div>
  </div>
  );
};

export default Ooty;