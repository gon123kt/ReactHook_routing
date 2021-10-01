import React from 'react';
import {Link} from 'react-router-dom';
import './../estilos/estilos.css'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
    return (
        <>
          <header>
                <h1>App personajes de Bleach</h1>
                <nav>
                <Link to='/about'>About</Link>
                <Link to='/detalles'>Detalles</Link>
                </nav>
            </header>
        </>
        
    );
 }
 
}