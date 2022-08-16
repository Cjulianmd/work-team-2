import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Name.svg'
import r2 from '../assets/img/Gmail.svg'
import r3 from '../assets/img/Phone number.svg'
import r4 from '../assets/img/unitstates.svg'
import r5 from '../assets/img/flecha.svg'
import r6 from '../assets/img/Exit.svg'
import {  Re7, Re2, Textacon, Textacon1, Back } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const cookies = new Cookies ();
export default function Acconysent(){
  let id = cookies.get('id'); 

  const url = 'https://sprint-2-1.herokuapp.com/usuarios/';
  const [data, setData] = useState([]);


  
  const getUsers = async() =>{
      await axios.get(url + id)
      .then(response => {
        setData(response.data)
        console.log(data)
      })
  }
  useEffect( ()=>{
       getUsers()
      
  },[])
  const nombre = data.nombre
  const email = data.email
  const telefono = data.telefono

    const cerrarsesion=()=>{
        cookies.remove('nombre', {path:"/"})
        cookies.remove('password', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('telefono', {path:"/"});
        window.location.href="./Singin";
        console.log(cookies.get('nombre'), "cerraste seci")
    }
  
  
    return (
      <div>
        <NavLink to='/pagina-perfil'><Back><img src={r5} alt=""/></Back></NavLink>
        <NavLink to='/Actualizardatos'><Textacon1>Account settings</Textacon1>
        <Re2><Textacon>{nombre}</Textacon><img src={r1} alt=""/></Re2>
        <Re2><td><Textacon>{email}</Textacon><img src={r2} alt=""/></td></Re2>
        <Re2><td><Textacon>{telefono}</Textacon><img src={r3} alt=""/></td></Re2></NavLink>
        <Re2><td><img src={r4} alt=""/></td></Re2>
        <Re7><img onClick={() => cerrarsesion()} src={r6} alt=""/></Re7>
      </div>
    )
}
