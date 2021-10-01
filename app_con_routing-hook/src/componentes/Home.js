import React from 'react';
import Character from "./Character";
import Data from "./../data/data.json";

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
            {Data.Characters.slice(0,3).map((element) => (
                <Character
                    //name={element.name + " " + element.lastname}
                    name={element.name}
                    photo={element.photo}
                    id={element.id}
                />
            ))}                
            </>
        )
    }
}