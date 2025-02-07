export default function Card(props){
    console.log(props)
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