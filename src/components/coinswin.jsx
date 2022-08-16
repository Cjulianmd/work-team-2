import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Stars.svg'
import r2 from '../assets/img/coin.svg'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { BtNext, BtpreN, Congratulations, Starts, T2, TC2, Textacon1 } from '../style/StyleGlobal';
import { T1, C2, Back } from './../style/StyleGlobal';
import axios from 'axios'
const cookies = new Cookies ();
const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';
const URL2 = 'http://localhost:4008/trasation/';
export default function Coinswin(){ 
            let id = cookies.get('id'); 
            let point = cookies.get('puntuacion')
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
        const email = data.email
        const telefono = data.telefono
        const password = data.password
    function coipu(){
        
        axios.put(baseUrl+password, {
            nombre:nombre,
            email:email,
            telefono:telefono,
            password: password,
            id: password,
            coins: point
            })
            axios.post(URL2,{
                coins:point,
                id: '' ,
             })
            
        .then(response =>{
            console.log(response);
            
        })
        .catch(error =>{
            console.log(error)
        })
        window.location.href="./test";}
    return (
        
      <div>
        <NavLink to='/test'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
        <Starts>
        <img src={r1} alt=""/>
        </Starts>
        <Congratulations>Congratulations</Congratulations>
        <T1>You have completed the test</T1>
        <T2>{point} correct answers</T2>
        <C2><img src={r2} alt=""/><TC2>{point}</TC2></C2>
        <BtNext onClick={() => coipu()}><center><BtpreN>save</BtpreN></center></BtNext>
      </div>
    )
}
