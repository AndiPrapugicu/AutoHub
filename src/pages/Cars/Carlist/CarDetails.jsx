import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CarData from "./CarData";
import "./CarDetails.css";

const CarDetails = () => {
  const { carName } = useParams();
  const carInfo = CarData.find(
    (car) => car.name.toLowerCase() === carName.toLowerCase()
  );

  if (!carInfo) {
    return <div>The car has not been found!</div>;
  }

  const columnCount = carInfo.models.length > 10 ? 4 : 2;
  const modelsPerColumn = Math.ceil(carInfo.models.length / columnCount);

  const sortedModels = carInfo.models.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const columns = Array.from({ length: columnCount }, (_, index) => {
    const startIndex = index * modelsPerColumn;
    const endIndex = startIndex + modelsPerColumn;
    return sortedModels.slice(startIndex, endIndex);
  });

  const [selectedModelIndex, setSelectedModelIndex] = useState(null);

  const toggleSubmodels = (modelIndex) => {
    setSelectedModelIndex((prevSelectedModelIndex) =>
      prevSelectedModelIndex === modelIndex ? null : modelIndex
    );
  };

  const renderModelDetails = (model, modelIndex) => {
    const modelPath = `/carlist/${carName.toLowerCase()}/${model.name
      .toLowerCase()
      .replace(/ /g, "-")}`;

    const isModelSelected = selectedModelIndex === modelIndex;

    return (
      <div key={model.name} className="car-details-container">
        <h3>{model.name}</h3>
        <Link to={modelPath}>
          <img
            src={`/${model.image}`}
            alt={model.name}
            className="car-details-img"
            onClick={() => toggleSubmodels(modelIndex)}
          />
        </Link>
        <h3>Top Performance Stats:</h3>
        <h4>Engine: {model.engine}</h4>
        <h4>Horsepower: {model.horsepower} HP</h4>
        <h4>Top Speed: {model.topSpeed}</h4>
        <h4>0-100 KM/H / 0-60 MPH: {model.launch}</h4>
        <h4>Fuel Consumption: {model.fuelConsumption}</h4>

        {isModelSelected && (
          <div>
            <h3>Submodels:</h3>
            {model.submodels.map((submodel) => (
              <div key={submodel.name}>
                <h4>{submodel.name}</h4>
                <img src={`/${submodel.image}`} alt={submodel.name} />
                <h4>Engine: {submodel.engine}</h4>
                <h4>Horsepower: {submodel.horsepower} HP</h4>
                <h4>Top Speed: {submodel.topSpeed}</h4>
                <h4>0-100 KM/H / 0-60 MPH: {submodel.launch}</h4>
                <h4>Fuel Consumption: {submodel.fuelConsumption}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="car-details">
      <h1>{carInfo.name}</h1>
      <div className="car-details-columns">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="car-details-column">
            {column.map((model, modelIndex) =>
              renderModelDetails(model, modelIndex)
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
