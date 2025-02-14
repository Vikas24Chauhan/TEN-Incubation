import "./Resident.css"

function Resident() {
    return (
        <>
            <div className="main-content">
                <img className="background" src="src/components/resident/Background.jpg" alt="Resident Incubation_Hero" />
                <div className="overlay"></div>
                <h1> Resident Incubation </h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Incubation Support</a></li>
                    <li><a href="#">Resident Incubation</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="in-page-nav">
                    <a href="#">Back</a>
                    <a href="#">Resident Incubation</a>
                    <a href="#">Pre-incubation</a>
                    <a href="#">Virtual Incubation</a>
                    <a href="#">Soft Landing Program</a>
                </div>
                <p className="description">Gain unparalleled access to a professional business environment, extensive networks, expert mentoring, and exclusive funding opportunities. Elevate your startup's brand, visibility, and credibility, surrounded by a dynamic community of inventive peers.</p>
            </div>
        </>
    )
}

export default Resident