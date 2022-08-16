import React, {  useState } from "react"
import axios from 'axios'
import Cookies from 'universal-cookie';
import Reactplayer from 'react-player'
import { Video, Textacon1, Back, Bpre2, Btpre, Bpre3, Bpre1, BtNext, BtpreN, BoxPre4, BoxPre2, BoxP, Rectangle60 } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT, Boxcou, Btpre1 } from './../style/StyleGlobal';

const cookies = new Cookies ();


 



export default function Postres() {
const baseUrl = "https://sprint-2-1.herokuapp.com/quiz"
const [counter, setCounter] = useState(1);
 function count(){
    setCounter(1)
      console.log(counter)
    
 }
 function count2(){
    setCounter(2);
      console.log(counter)
 }
 function count3(){
    setCounter(3)
      console.log(counter)
    
 }
 function count4(){
    setCounter(4)
      console.log(counter)
    
 }
 function count5(){
    setCounter(5)
      console.log(counter)
    
 }
 function count6(){
    setCounter(6);
      console.log(counter)
 }
 function count7(){
    setCounter(7)
      console.log(counter)
    
 }
 function count8(){
    setCounter(8)
      console.log(counter)
    
 }
 
    
		axios.get(baseUrl, {params: { id: counter}})
		.then(response =>{
         return response.data;
        
      })
      .then(response=>{

            let respuesta = response[0];
            let id = respuesta.id
            let video = respuesta.video
            let descripcion = respuesta.descripcion
            let pregunta = respuesta.pregunta
            let opciones = respuesta.opciones
            let img = respuesta.img
            cookies.set('id-t', id, {phat: "/"});
            cookies.set('video', video, {phat: "/"});
            cookies.set('descripcion', descripcion, {phat: "/"});
            cookies.set('pregunta', pregunta, {phat: "/"});
            cookies.set('opciones', opciones, {phat: "/"});
            cookies.set('img', img, {phat: "/"});
       })
      .catch(error =>{
         console.log(error)
      });

  let video = cookies.get('video'); 
  let descripcion = cookies.get('descripcion'); 
  let pregunta = cookies.get('pregunta'); 

	return (
		<div >
      <NavLink to='/ele'><Back><img src={r5} alt=""/></Back></NavLink>
      <Video>
      <Reactplayer
      url={video} 
      border-radius='15px'
      height='200px'  
      width='358px'
      controls
      playing/>
    </Video>
    <BoxP>
      {descripcion}{pregunta}

    </BoxP>
    <Boxcou>
      <Rectangle60 onClick={() => count()}>
      <center>
      <Btpre1>Introduction</Btpre1>
      </center>
      </Rectangle60>

    

    
      <Rectangle60 onClick={() => count2()}>
      <center>
      <Btpre1>Language rules</Btpre1>
      </center>
      </Rectangle60>
   

   
      <Rectangle60 onClick={() => count3()}>
      <center>
      <Btpre1>Verbs and their application</Btpre1>
      </center>
      </Rectangle60>
   

    
    <Rectangle60 onClick={() => count4()}>
    <center>
     <Btpre1>Declension Times</Btpre1>
     </center>
    </Rectangle60>

    <Rectangle60 onClick={() => count5()}>
    <center>
     <Btpre1>To be</Btpre1>
     </center>
    </Rectangle60>

    <Rectangle60 onClick={() => count6()}>
    <center>
     <Btpre1>Irregular Verbs</Btpre1>
     </center>
    </Rectangle60>
    
    <Rectangle60 onClick={() => count7()}>
    <center>
     <Btpre1>Communication patterns</Btpre1>
     </center>
    </Rectangle60>

    <Rectangle60 onClick={() => count8()}>
    <center>
     <Btpre1>Extra lesson</Btpre1>
     </center>
    </Rectangle60>
    </Boxcou>
    </div>

	)

}