import React from "react";

function Card(props) {
   console.log(props);
   return (
      <div className="card">
         <img src={props.img} alt="" className="card-image" />
         <div className="card-stats">
            <img src="./images/star.png" alt="" className="card-star" />
            <span>{props.stats.rating}</span>
            <span className="gray">{props.stats.reviewCount} • </span>
            <span className="gray">{props.state}</span>
         </div>
         <p>{props.description}</p>
         <p>
            <span className="bold">{props.price}</span> / person
         </p>
      </div>
   );
}
export default Card;
