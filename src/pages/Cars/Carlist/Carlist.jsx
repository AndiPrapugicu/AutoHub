import "./Carlist.css";
import CARS_DATA from "./CarlistData";
import { Link } from "react-router-dom";

const CarList = () => {
  return (
    <div>
      <div className="carlist">
        <div>
          <p className="carlist-welcome">Welcome to Auto Hub Car List.</p>
        </div>
        <div className="carlist-container">
          <div className="grid">
            {CARS_DATA.map((car, index) => (
              <Link
                to={`/carlist/${car.name.toLowerCase()}`}
                className="box"
                key={index}
                style={{
                  backgroundImage: `url(${car.image})`,
                  borderRadius: "12px",
                  backgroundSize: "60px",
                  alignItems: "flex-end",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  textDecoration: "none",
                }}
              >
                {car.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
