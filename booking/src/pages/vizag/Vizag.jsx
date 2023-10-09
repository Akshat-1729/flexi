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
      <p className="desc">Kailasagiri is a hilltop park in the city of Visakhapatnam in the Indian state of Andhra Pradesh.[3] The park was developed by the Visakhapatnam Metropolitan Region Development Authority (VMRDA) and comprises 380 acres (150 ha) of land covered with flora and tropical trees. The hill, at 173 metres (568 ft), overlooks the city of Visakhapatnam.
</p>
      </div>
      <div className="searchItem img-box">
      <img
        src={v2}
        alt=""
        className="siImg"
      />
      <p className="desc">Tenenti, an urban park, is located in close vicinity to the Bay of Bengal at Jodugullapalem in Visakhapatnam. It has recently been renovated for tourism purposes. In addition, one of the city's oldest parks, Tenneti, was destroyed in a cyclone Hudhud in 2014 and was reconstructed according to international standards.
</p>
      </div><div className="searchItem img-box">
      <img
        src={v3}
        alt=""
        className="siImg"
      />
      <p className="desc">Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.
</p>
      </div><div className="searchItem img-box">
      <img
        src={v4}
        alt=""
        className="siImg"
      />
      <p className="desc">The first of its kind in the whole south Asia. INS Kurusura Submarine is a Soviet built-I-641 class Submarine was inducted into the Indian Navy on 18, December 1969 and the same was decommissioned on 28, February 2001 after 31 years of glorious service to the nation.
</p>
      </div><div className="searchItem img-box">
      <img
        src={v5}
        alt=""
        className="siImg"
      />
      <p className="desc">An All-Weather Deep-Water Port that connects vast Hinterlands with State-of-the-Art Infrastructure Facilities and Multi-Modal Connectivity. With High Mechanization in handling, storage & evacuation of Cargo, Gangavaram Port delivers efficiency across the value chain to its partners.
</p>
      </div><div className="searchItem img-box">
      <img
        src={v6}
        alt=""
        className="siImg"
      />
      <p className="desc">One of the largest caves in the country, Borra Caves are home to million-year-old stalactite and stalagmite formations. Perched at an elevation of 1,400 m above sea level, the majestic caves are a visual treat for visitors. They came into existence as a result of the flow of Gosthani river on the limestone deposits in the area
</p>
      </div>

    </div>
  </div>
  );
};

export default Vizag;