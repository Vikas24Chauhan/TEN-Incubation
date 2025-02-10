<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./Incubation-support.css"
import Card from "./Card"
import carddata from "../../assets/data/incubationSupportData"

function IncubationSupport() {
  
  const cardElements = carddata.map((data)=>{
      return(
        <Link to={`/incubation-support/${data.id}`} key={data.id}>
        <Card image={data.image} 
        title={data.title}
        description={data.description}
        />
        </Link>
      )
  })
=======
import "./Incubation-support.css";
import Card from "./Card";
import carddata from "../../assets/data/incubationSupportData";

function IncubationSupport() {
  const cardElements = carddata.map((data) => {
    return (
      <Card
        image={data.image}
        title={data.title}
        description={data.description}
      />
    );
  });
>>>>>>> f65ded480205f50dbef9af78d366076444a7d3b6

  return (
    <>
      <div className="main-content">
        <div className="incubationSupport-header">
          <h1>Incubation Support</h1>
        </div>
        <div className="incubationSupport-cards">{cardElements}</div>
      </div>
    </>
  );
}

export default IncubationSupport;
