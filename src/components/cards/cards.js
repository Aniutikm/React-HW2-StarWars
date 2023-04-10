import React from "react";
import "../cards/cards.css";
import Card_title  from '../card_title/card_title';

export const Cards = ({data}) => {    
    return (
        <div className="cards">
        {
            Array.isArray(data)? data.map((e,i)=>{
                return <Card_title properties={e} key={i}/>
            }) :null
        }
        </div>
    )
}
