import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          className="form-control" // Add Bootstrap form-control class
        />
       <button className="btn btn-primary btn-block mt-3 d-flex mx-auto">Subscribe</button>

 
      </div>
    </div>
  );
};

export default MailList;
