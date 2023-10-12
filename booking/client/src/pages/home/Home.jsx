import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import "./home.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  try {
    // Your component rendering code here
    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error)
    // Handle the error gracefully (e.g., display an error message)
    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <h1 className="homeTitle">An error occurred: {error.message}</h1>
          <Footer />
        </div>
      </div>
    );
  }
};

export default Home;