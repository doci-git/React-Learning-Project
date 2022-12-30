import React from "react";
import Card from "./Card.js";
import data from "./data.js";

function Main() {
   const cards = data.map((item) => {
      return (
         <Card
            key={item.id}
            item={item}
            // key={item.id}
            // img={item.img}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // state={item.state}
            // title={item.title}
            // price={item.price}
         />
      );
   });
   
     return (
      <div className="parent">
      {cards}
      </div>
     
      )
   }
   export default Main;

   
      // return (
      //    <div className="parent">
   
      //    <Card
   
      //    />
   
      {
         /* <Card
               img="./images/card-1.jpg"
               star="5.0"
               comment="(116)"
               state="Usa"
               paragraf="Life Lessons with Surf
               6
               6"
               price="From €136"
            />
            <Card
               img="./images/card-2.jpg"
               star="4.9"
               comment="(105)"
               state="Swizerland"
               paragraf="Alpes of Swiss"
               price="From €166"
            />
            <Card
               img="./images/card-3.png"
               star="4.8"
               comment="(200)"
               state="Italy"
               paragraf="Tuscany county Side"
               price="From €150"
            />
            <Card
               img="./images/card-4.jpg"
               star="5.0"
               comment="(36)"
               state="Airbnb"
               paragraf="Gift Cart"
               price="From €100"
            /> */
      }
      //    </div>
      // );