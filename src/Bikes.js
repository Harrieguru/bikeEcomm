import React from "react"
import Card from "./Card.js"
import bikesData from "./bikesData.json"
import "./Card.css"


function Bikes(){
    return(
        <>
        <div className="bikes-card">
            {bikesData.map((bike) => (
                <Card 
                key={bike.id}
                title={bike.title}
                description={bike.description}
                imageUrl={bike.imageUrl}
                />
            ))}
        </div>
        </>
    )
}

export default Bikes