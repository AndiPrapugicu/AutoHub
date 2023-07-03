import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="description">
        <div className="autohub-container">
          <img src="./autohub3.png" className="autohub" />
        </div>
        <p className="page-description">
          Welcome to Auto Hub, your online destination for precise information
          about cars. Whether you're an automotive enthusiast or simply looking
          to purchase a new vehicle, we're here to provide you with the most
          detailed and up-to-date information about car models and
          specifications.
        </p>{" "}
        <div className="autohub-container">
          <img src="./description.png" className="autohub" />
        </div>
        <p>
          {" "}
          Auto Hub equips you with the tools you need to find the perfect car
          model. Search by brands, models, manufacturing year, or specific
          features to get relevant and personalized results.{" "}
        </p>{" "}
        <div className="autohub-container">
          <img src="./luxurycar.png" className="autohub" />
        </div>
        <p>
          Whether you're interested in luxury cars, SUVs, electric vehicles, or
          any other type of vehicle, we're here to simplify your search process.
          On Auto Hub, you'll find detailed information about each car model,
          including technical specifications, engines, dimensions.
        </p>
        <div className="autohub-container">
          <img src="./description2.png" className="autohub" />
        </div>
        <p>
          {" "}
          Whether you're interested in new or used cars, we're here to provide
          transparency and confidence in the purchasing process. Discover the
          fascinating world of automobiles on Auto Hub and find the perfect
          model that matches your style and needs. Simple, fast, and efficient!
        </p>
      </div>
    </div>
  );
}

export default Home;
