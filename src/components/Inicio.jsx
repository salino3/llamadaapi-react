import React, { Fragment, useEffect, useState } from 'react'
import { todosPersonajes } from '../funciones/funciones.js';



export default function Inicio() {
  const [personajes, setPersonajes] = useState(null)
  

  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])
  return (
    <Fragment>
{personajes  != null ? (
  personajes.map(personaje => (
    <div key={personaje.id}>
    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
    {/* <img src={personaje.image} alt='imagenes'></img> */}
    </div>
  ))
) : ('no hay personajes')}
   </Fragment>
  );
}

