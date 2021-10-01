import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Data from "./../data/data.json";


const CharacterDetail = (props) => {
    //const {id} = useParams();
//console.log(props.id);

const entorno = useParams();
//console.log(entorno.id);
  const [actual, setActual] = useState(
    {
        detalles: Data.Characters[0]
    },
    )

  useEffect(() => {

    if ( Object.keys(entorno).length === 0 ){
      setActual(
          {
              ...actual, 
              detalles:Data.Characters[0]
          }
          )
    }
    else{
      setActual(
          {
              ...actual,
               detalles:Data.Characters.find(
        (element) => element.id == entorno.id
      ),
        }
      )
    }
   
  },[entorno])
   
  const cambiarPersonaje = (event) =>{
    setActual(() => {
        return {
          detalles: Data.Characters.find(
            (element) => element.id == event.target.value
          ),
        };
      });
  }
 
  if(( Object.keys(entorno).length === 0 )){
    return (
      <div>

        <select
          onChange={(event) => {
            cambiarPersonaje(event);
          }}
          
        >
         {Data.Characters.map((element) => (
            <option key={element.id} value={element.id} selected={element.id === actual.detalles.id}>
              {element.name}
            </option>
          ))}
        </select>
          <div>
          <h3>{actual.detalles.name }</h3>
          <div>
            <img src={actual.detalles.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {actual.detalles.age + " años"}</p>
          <p> Ciudad: {actual.detalles.City}</p>
        </div>
      </div>
    );
  } else{


    return (

        <div>
          <h3>{actual.detalles.name }</h3>
          <h3> Character Details</h3>
          <p> Edad: {actual.detalles.age + " años"}</p>
          <p> Ciudad: {actual.detalles.City}</p>
        </div>
     
    );
      
  }
  
}
export default CharacterDetail;