import React, { useState, useEffect} from 'react';
import Tap1 from '../components/NavBar'
import c from '../assets/img/coin.svg'
import h from '../assets/img/Notificacion.svg'
import {Reta, TitleH, TextH, Coin, Noti, CoinN} from '../style/StyleGlobal'
import Cookies from 'universal-cookie';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
const cookies = new Cookies ();
export default function Rectangulo(){
  
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
  const coins = data.coins
  return (
    <div>
      <Reta>
      <NavLink to='/Coin'><Coin><td><img src={c} alt=""/></td></Coin><CoinN>{coins}</CoinN></NavLink>
              <Noti><td><img src={h} alt=""/></td></Noti>
              <Tap1/> 
                  <TitleH>
                      Hi,{nombre} 
                  </TitleH> 
                  <TextH>
                      Let’s start learning
                  </TextH>
       </Reta>
      
    </div>
  )
   
}
