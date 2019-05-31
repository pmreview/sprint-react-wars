import React from "react";
import Character from "./Character"

const Characters = props => {
    return (
        <div>
            {props.characters.map(char => (<Character characters={char}/>))}
        </div>
    )
}

export default Characters; 