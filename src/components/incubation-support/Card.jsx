export default function Card(props) {
  return (
    <>
      <div className="incubationSupport-card">
        <img src={props.image.src} alt={props.image.alt} />
        <div className="incubationSupport-card-content">
          <h2 className="incubationSupport-card-title">{props.title}</h2>
          <p className="incubationSupport-card-description">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
