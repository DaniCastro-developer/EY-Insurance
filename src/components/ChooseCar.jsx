import React from "react";
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import "../styles/chooseCar.css";
import HeaderBack from "./HeaderBack";
import {Link} from 'react-router-dom'

const ChooseCar = () => {
  const { nombre, auto, poliza, setCarSinister} = React.useContext(userContext);

  const saveValue = (item) => {
    const choose = item
    console.log(choose)
    setCarSinister(choose); 
    
 }
 return (
  <section className="selectCar">
    <HeaderBack />
    <div className="containerSelectcar">
      <p className=" h1 text-center mt-4 mb-4"> Hola {nombre} </p>
      <p className="h3 text-center mb-4"> Escoge tu vehículo </p>

      {/*  style="max-width: 540px" */}
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={car}
              className="img-fluid rounded-start mt-4 ms-4"
              alt="auto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">

            {
                
                [auto.auto1].map((item, id) => (
                  <button
                  key={id}
                onClick= {saveValue(item)} 
              
              >
                  <h2 >
                    {" "}
                    {item.modelo} {item.marca} {item.patente}{" "}
                  </h2>
                  </button>
                ))}

{
                [poliza.poliza1].map((item, id) => (
                  <div key={id}>
                  
                    <p className="card-text">
                      {" "}
                      Poliza: {item.codigo} Vigencia: {item.vigencia}{" "}
                    </p>
                    <p className=" h5 text-info card-text">{item.estado}</p>
                  
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="continue-btn">
          <Link to = "/sinister">
          <button type="button" class="btn btn-dark next-btn">Siguiente</button>
          </Link>
        </div>
    </section>
  );
};

export default ChooseCar;
