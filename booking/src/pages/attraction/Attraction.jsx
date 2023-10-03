import "./attraction.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import i1 from "../../images/ajanta.jpg";
import i2 from "../../images/i2.webp";
import i4 from "../../images/india gate.jpg";
import i5 from "../../images/golden gate.jpg";
import i6 from "../../images/hawa.jpg";
import i3 from "../../images/victoria.jpg"



const Attraction = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
    <div className="outerBox">
    <div className="searchItem img-box">
      <img
        src={i1}
        alt=""
        className="siImg"
      />
      <p className="desc">Ajanta Caves: Ajanta Caves, a UNESCO World Heritage Site in Maharashtra, India, is an ancient masterpiece carved into rock cliffs. These caves house breathtaking murals, sculptures, and intricate architecture dating back to the 2nd century BCE. They offer a glimpse into India's rich Buddhist history and artistry.
</p>
      </div>
      <div className="searchItem img-box">
      <img
        src={i2}
        alt=""
        className="siImg"
      />
      <p className="desc">Taj Mahal: Taj Mahal, a UNESCO World Heritage Site in Agra, India, is an architectural masterpiece renowned for its white marble beauty. It symbolizes eternal love and attracts millions of tourists with its intricate carvings and stunning gardens.
</p>

      </div><div className="searchItem img-box">
      <img
        src={i3}
        alt=""
        className="siImg"
      />
      <p className="desc">Victoria Memorial: Situated in Kolkata, India, the Victoria Memorial is an iconic monument honoring Queen Victoria. Its grandeur reflects the colonial era's architectural splendor. Surrounded by lush gardens, it serves as a museum, showcasing India's history through artifacts and exhibits.
</p>
      </div><div className="searchItem img-box">
      <img
        src={i4}
        alt=""
        className="siImg"
      />
      <p className="desc">India Gate, an iconic war memorial in New Delhi, India, pays tribute to soldiers who sacrificed their lives in World War I. Surrounded by lush lawns, it stands as a symbol of valor and national pride. Lit up at night, it creates a mesmerizing sight, drawing visitors from around the world
</p>
      </div><div className="searchItem img-box">
      <img
        src={i5}
        alt=""
        className="siImg"
      />
      <p className="desc">The Golden Temple in Amritsar, India, is a spiritual haven for Sikhs. Its gleaming golden exterior, surrounded by a sacred pool, exudes tranquility. Visitors are welcomed with open arms, emphasizing the Sikh principles of equality and hospitality.

</p>
      </div><div className="searchItem img-box">
      <img
        src={i6}
        alt=""
        className="siImg"
      />
      <p className="desc">Hawa Mahal, or the Palace of Winds, stands as a prominent architectural marvel in Jaipur, India. Its unique honeycomb structure, adorned with intricate windows, allowed royal women to observe street festivals discreetly. This pink sandstone palace is a testament to Rajasthan's rich heritage.

</p>
      </div>

    </div>
  </div>
  );
};

export default Attraction;