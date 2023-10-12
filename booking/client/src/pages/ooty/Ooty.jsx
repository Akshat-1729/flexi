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
      <p className="desc">The Botanical Garden in Ooty is one of the largest botanical gardens in India, is an amazing place to be for nature lovers, and those who love to be around exotic and rare flora. Covering an area of almost 55 hectares, this botanical garden in Ooty lies on the foothills of the Doddabetta Peak.
</p>
      </div>
      <div className="searchItem img-box">
      <img
        src={o2}
        alt=""
        className="siImg"
      /><p className="desc">Surrounded by mountains and covered by lovely flowers, Avalanche Lake Ooty is a famous tourist spot in the Nilgiris district, away from the bustling traffic. Avalanche Lake Ooty makes the perfect setting for a family and adventure package.
      </p>
      </div><div className="searchItem img-box">
      <img
        src={o3}
        alt=""
        className="siImg"
      /><p className="desc">After a casual stroll by the lake you can gear up bigger adventures and get the excitement on, by a visit to the deer park. This place is like a "demo" version for what is in store for you as you go for some real sightseeing.
      </p>
      </div><div className="searchItem img-box">
      <img
        src={o4}
        alt=""
        className="siImg"
      /><p className="desc">Kalhatti Falls also called as Bird Watcher's Falls is a tourist spot near Ooty, The Nilgiris, Tamil Nadu. These falls are about 13 km from Ooty, on the Ooty to Mysore Road or Sigur Ghat Road, It is situated at an average height of around 400 feet in the Sigur Plateau.This Place is rich in wild life like Bison, Bear, Deer, and also various type of birds
      </p>
      </div><div className="searchItem img-box">
      <img
        src={o5}
        alt=""
        className="siImg"
      /><p className="desc">Ooty Rose Garden is a mesmerizing garden in the heart of the town of Ooty, in Tamil Nadu. It is also known as the Jayalalithaa Rose Garden, the Nootrandu Roja Poonga and the Centenary Rose Park. Nature lovers are drawn to the Rose Garden like bees to honey.
      </p>
      </div><div className="searchItem img-box">
      <img
        src={o6}
        alt=""
        className="siImg"
      /><p className="desc">The St Stephens Church, Ooty is one of the architectural marvels that the British left for us. A very old church, which dates back to the 19th century, it was built to coincide with the birthday of King George IV.
      The main beam and all the required timber were taken from Tipu Sultan's palace after the British defeated him in the Mysore War.
      </p>
      </div>

    </div>
  </div>
  );
};

export default Ooty;