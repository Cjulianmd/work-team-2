import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import {  Back, Rectangle60, Coin, CoinN, Coin1, Textacon1 } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT, Boxcou, Btpre1, Reta, CoinN1, Re12 } from './../style/StyleGlobal';
import c from '../assets/img/coin.svg'
import r2 from '../assets/img/Unlock premium.svg'
import r1 from '../assets/img/abg.svg'
const cookies = new Cookies ();

export default function Postres() {
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
    const coins = data.coins

	return (
		<div >
        <Reta>
      <NavLink to='/Coin'><Coin1><img src={c} alt=""/></Coin1></NavLink><CoinN1>{coins}</CoinN1>
       <NavLink to='/home'><Back><img src={r5} alt=""/></Back></NavLink>
       <Textacon1>Сurrent balance</Textacon1>
       </Reta>
       <Re12><img src={r2} alt=""/></Re12>
       <NavLink to='/compracoi'><img src={r1} alt=""/></NavLink>
    </div>

	)

}