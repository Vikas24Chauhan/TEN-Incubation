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

  return (
    <>
      <div className="main-content">
        <div className="incubationSupport-header">
          <h1>Incubation Support</h1>
        </div>
        <div className="cards">
          {cardElements}
        </div>
      </div>
    </>
  )
}

export default IncubationSupport