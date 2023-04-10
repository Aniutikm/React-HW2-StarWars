import React from "react";
import "../card_title/card_title.css";


function Card_title({ properties }) {
    const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url} = properties;

        return (
            <div className="person">
                <div><span>Name:</span> {name}</div>
                <div><span>Height:</span> {height}</div>
                <div><span>Mass:</span> {mass}</div>
                <div><span>Hair_color:</span> {hair_color}</div>
                <div><span>Skin_color:</span> {skin_color}</div>
                <div><span>Eye-color:</span> {eye_color}</div>
                <div><span>Birth_year:</span> {birth_year}</div>
                <div><span>Gender:</span> {gender}</div>
                <div><span>Url:</span> <a href={url} target='_blank'>LINK</a></div>
            </div>
        )
    }

export default Card_title;
