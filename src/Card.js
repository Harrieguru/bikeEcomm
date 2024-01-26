import React from "react"
import "./Card.css"

const Card = (props) => {
    const { title, description, imageUrl } = props;

    return(
        <div className="card">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card