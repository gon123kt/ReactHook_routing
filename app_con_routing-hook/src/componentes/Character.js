import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";

const Character =(props)=> {
        const [name, setName] = useState(props.name);
        const [photo, setPhoto] = useState(props.photo);
        const [id, setId] = useState(props.id);
        console.log(name);
        console.log(id);
    return (
    <div>
        <h3>Personaje</h3>
        <div>
             <h1>{name}</h1> 
             <NavLink personaje={id} to={`/detalles/${id}`} ><img src={photo}/></NavLink>
             
        </div>
    </div>
    );
  
}
export default Character;