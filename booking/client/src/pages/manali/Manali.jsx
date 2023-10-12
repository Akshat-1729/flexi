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
      <p className="desc">Nehru Kund is known for the cold and pristine water running here and breathtaking scenery of mountains and valleys all around. Nehru Kund is famous for photography among tourists. The place has the perfect natural lighting for a great photo shoot.
</p>
      </div>
      <div className="searchItem img-box">
      <img
        src={m2}
        alt=""
        className="siImg"
      />
      <p className="desc">Jogini Fall is formed by the tributary of the Beas River. Jogini Falls is situated on the Northern edge of Vashisht Village which marks the village boundary. The waterfall cascades down from a height of around 150 feet through multiple levels. There is a small pool at the base formed by the fall and visitors can take a plunge in the water and spend some time. This is one of the top attractions you must include in Manali Packages.
</p>
      </div><div className="searchItem img-box">
      <img
        src={m3}
        alt=""
        className="siImg"
      />
      <p className="desc">The Naggar Castle is a magnificent historical structure made of stone and wood,. The castle was built by Raja Sidhi Singh in 1460 AD in an impressive combination of European and Himalayan architecture. There are three small shrines present within the premises that hold religious significance.
</p>
      </div><div className="searchItem img-box">
      <img
        src={m4}
        alt=""
        className="siImg"
      />
      <p className="desc">Van Vihar National Park and Zoo is one of the most revered National Park and Zoo of Central India and is a shining beacon in the field of conservation. It is an amazing world of winged creatures, free ranging ungulates and captive carnivores in the midst of greenery.
</p>
      </div><div className="searchItem img-box">
      <img
        src={m5}
        alt=""
        className="siImg"
      />
      <p className="desc">Rohtang Pass is quite famous among Ladakh travelers but the unpredictable avalanche and severe climatic conditions make it scary some times. Nonetheless, it had made adventure seekers’ tour of Ladakh mind-blowing. A high mountain pass at an elevation of 3978 meters above the sea level, Rohtang is just 51 km from Manali. It is a part of the proud Pir Panjal Range of the mighty Himalayas and it is one of the Kullu famous places.
</p>
      </div><div className="searchItem img-box">
      <img
        src={m6}
        alt=""
        className="siImg"
      />
      <p className="desc">A lot of trekkers do the Bhrigu Lake trek for the lake is steeped in mythology. This trek lies in Himachal Pradesh, around 20 km north of Manali and can be accessed from Gulaba.
It is known as the place where the famous saint Maharishi Bhrigu sat in deep meditation. However, we believe the lake is not the only thing the trek has to offer. You must do the Bhrigu Lake trek for its grasslands.
</p>
      </div>

    </div>
  </div>
  );
};

export default Manali;