import "./featured.css";
import vizag from "../../images/v.jpg"
import ooty from "../../images/o.jpg"
import manali from "../../images/m.jpg"
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")


  return (
    <div className="featured">
      {loading ? ("Loading Please Wait") : (<><div className="featuredItem">
        <a href="/destination/ooty">
        <img
          src={ooty}
          alt=""
          className="featuredImg"
        />
        </a>
      </div>
      
      <div className="featuredItem">
        <a href="/destination/vizag">
        <img
          src={vizag}
          alt=""
          className="featuredImg"
        />
        </a>
      
      </div>
      <div className="featuredItem">
        <a href="/destination/manali">
        <img
          src={manali}
          alt=""
          className="featuredImg"
        />
        </a>
    
      </div></>)}
    </div>
  );
};

export default Featured;