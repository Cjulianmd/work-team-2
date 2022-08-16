
import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import { Back, BtNext, Re1} from '../style/StyleGlobal'
import r1 from '../assets/img/Course.svg'
import { BtpreN } from './../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import axios from 'axios'
const cookies = new Cookies ();

function Elementari(){
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
        function Count(){
           if (coins  < 520){
            alert('aun no tienes suficientes monedas')
           }else{
            window.location.href="./curso";
           }
        
        }
        
        return (
            
            <React.StrictMode>
                <NavLink to='/home'><Back><img src={r5} alt=""/></Back></NavLink>
                <td><img src={r1} alt=""/></td>
                <BtNext onClick={() => Count()}><BtpreN >Buy</BtpreN></BtNext>
            </React.StrictMode>
        );
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Elementari;