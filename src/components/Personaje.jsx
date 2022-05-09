import React, { useEffect, Fragment, useState} from 'react'
import {useParams} from 'react-router-dom'
import { unicoPersonaje } from '../funciones/funciones'

export default function Personaje() {
const [personaje, setPersonaje] = useState('')

 const  params = useParams()
useEffect(() => {
  unicoPersonaje(params.id, setPersonaje)
}, [])
  return (
    <Fragment>
    {personaje !== '' ? (
      <div>
      <h2>Personaje con el id {params.id}</h2>
      <p>con el nombre {personaje.name} </p>
      <img src={personaje.image} alt='imagen'></img> 
      </div>
     ) : ('no hay personaje')}
    </Fragment>
  );
}
