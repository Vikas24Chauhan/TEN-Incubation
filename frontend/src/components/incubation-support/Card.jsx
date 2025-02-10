<<<<<<< HEAD
export default function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.image.src} alt={props.image.alt} />
            <div className="card-content">
              <h2 className="card-title">{props.title}</h2>
              <p className="card-description">{props.description}</p>
            </div>
          </div>
        </>
    )
}
=======
export default function Card(props) {
  console.log(props);
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
>>>>>>> f65ded480205f50dbef9af78d366076444a7d3b6
