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
