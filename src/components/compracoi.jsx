import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Stars.svg'
import r2 from '../assets/img/coin.svg'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { BtNext, BtpreN, Boxcou1, Btpre1, TC2, Textacon1, Rectangle60 } from '../style/StyleGlobal';
import { T1, C2, Back } from './../style/StyleGlobal';
import axios from 'axios'
const cookies = new Cookies ();
const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';

export default function Coinswin(){ 
            let id = cookies.get('id'); 
            let point = cookies.get('puntuacion')
        const url = 'https://sprint-2-1.herokuapp.com/usuarios/';
        const URL2 = 'http://localhost:4008/trasation/';
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
            coins: counter
            })
        axios.post(URL2,{
        coins:counter,
        id: '' ,
     }
        )
            
        .then(response =>{
            console.log(response);
            
        })
        .catch(error =>{
            console.log(error)
        })}

        const [counter, setCounter] = useState(1);
 function count(){
    setCounter(1000)
      console.log(counter)
    
 }
 function count2(){
    setCounter(20);
      console.log(counter)
 }
 function count3(){
    setCounter(300)
      console.log(counter)
    
 }
 function count4(){
    setCounter(4000)
      console.log(counter)
    
 }
 function count5(){
    setCounter(500)
      console.log(counter)
    
 }
 function count6(){
    setCounter(600);
      console.log(counter)
 }
 function count7(){
    setCounter(7)
      console.log(counter)
    
 }
 function count8(){
    setCounter(8000)
      console.log(counter)
    
 }
    return (
        
      <div>
        <NavLink to='/home'><Back><img src={r5} alt=""/></Back>
        <Textacon1>About business</Textacon1></NavLink>
        <Boxcou1>
        <Rectangle60 onClick={() => count()}>
        <center>
        <Btpre1><img src={r2} alt=""/>1000</Btpre1>
        </center>
        </Rectangle60>

        

        
        <Rectangle60 onClick={() => count2()}>
        <center>
        <Btpre1><img src={r2} alt=""/>20</Btpre1>
        </center>
        </Rectangle60>
    

    
        <Rectangle60 onClick={() => count3()}>
        <center>
        <Btpre1><img src={r2} alt=""/>300</Btpre1>
        </center>
        </Rectangle60>
    

        
        <Rectangle60 onClick={() => count4()}>
        <center>
        <Btpre1><img src={r2} alt=""/>4000</Btpre1>
        </center>
        </Rectangle60>

        <Rectangle60 onClick={() => count5()}>
        <center>
        <Btpre1><img src={r2} alt=""/>500</Btpre1>
        </center>
        </Rectangle60>

        <Rectangle60 onClick={() => count6()}>
        <center>
        <Btpre1><img src={r2} alt=""/>600</Btpre1>
        </center>
        </Rectangle60>
        
        <Rectangle60 onClick={() => count7()}>
        <center>
        <Btpre1><img src={r2} alt=""/>7</Btpre1>
        </center>
        </Rectangle60>

        <Rectangle60 onClick={() => count8()}>
        <center>
        <Btpre1><img src={r2} alt=""/>8000</Btpre1>
        </center>
        </Rectangle60>
    </Boxcou1>
        <BtNext onClick={() => coipu()}><center><BtpreN>save</BtpreN></center></BtNext>
      </div>
    )
}
