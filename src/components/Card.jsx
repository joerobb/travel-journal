import React from "react"

export default function Card(props) {
    console.log(props)
    // let badgeText
    // if (props.card.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.card.location === "Online") {
    //     badgeText = "ONLINE"
    // } 




    return (
        <div className="card">
    
            <img className="card--img" src={props.card.imageUrl} alt={props.title} />
         
            <div className="card--stats">
                <div className="card--locationStats">
                    <img src="../assets/pin.png" className="card--pin" />
                    <h3 className="card--location">{props.card.location}</h3>
                    <a href={props.card.googleMapsUrl} className="card--locationLink">View on Google Maps</a>
                </div>
            <h1 className="card--poi">{props.card.title}</h1>
            <h4 className="card--dates">{props.card.startDate} - {props.card.endDate}</h4>
            <p className="card--description">{props.card.description}</p>
            </div>
      


            {/* {badgeText && <div className="card--badge">{badgeText}</div>}
            
            <div className="card--stats">
                <img src="../assets/star.png" className="card--star" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span> / person</p> */}
        </div>
    )
}