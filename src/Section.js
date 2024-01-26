import React from "react"
import Bikes from "./Bikes.js"

function Section(){

    const titles = ["Road","City","Mountain"]
    const element = titles.map(title => {
        return (
            <div>
                <h3>{title} Bikes</h3>
                <hr />
                <Bikes />
            </div>
        )
    })
    return(
        <>
            <div>
                {element}
            </div>
        </>
    )
}

export default Section