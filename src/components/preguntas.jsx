import React, {  useState } from "react"
import axios from 'axios'
import Cookies from 'universal-cookie';
import Reactplayer from 'react-player'
import { Video, Textacon1, Back, Bpre2, Btpre, Bpre3, Bpre1, BtNext, BtpreN, BoxPre4, BoxPre2, BoxP } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { Bpre4, BoxPre, BoxPre3, BoxPreT } from './../style/StyleGlobal';

const cookies = new Cookies ();


 



export default function Postres() {
const baseUrl = "https://sprint-2-1.herokuapp.com/quiz"
const [counter, setCounter] = useState(1);
 function count(){
  if(counter == 11){
      console.log("hola")
      window.location.href="./win";
    }else{
      setCounter(counter + 1)
      cookies.set('count', counter, {phat: "/"});
      console.log(counter)
    }
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
  let opciones = cookies.get('opciones');


  const [puntuacion, setPuntuacion] = useState(0);


  function handleAnswerSumit(isCorrect, e){

    if(isCorrect == "true"){
      setPuntuacion(puntuacion + 1)
      alert("correcta")
    }
    console.log(isCorrect)
  }
  cookies.set('puntuacion', puntuacion, {phat: "/"});
	return (
		<div >
      <NavLink to='/test'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
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
    <BoxPre>
      <Bpre1 onClick={(e) => handleAnswerSumit(opciones[0].isCorrect, e)}>
      <center>
      <Btpre>A</Btpre>
      </center>
      </Bpre1>
      <BoxPreT>{opciones[0].textoRespuesta}</BoxPreT>
    </BoxPre>

    <BoxPre2>
      <Bpre2 onClick={(e) => handleAnswerSumit(opciones[1].isCorrect,e)}>
      <center>
      <Btpre>B</Btpre>
      </center>
      </Bpre2>
      <BoxPreT>{opciones[1].textoRespuesta}</BoxPreT>
    </BoxPre2>

    <BoxPre3>
      <Bpre3 onClick={(e) => handleAnswerSumit(opciones[2].isCorrect,e)}>
      <center>
      <Btpre>C</Btpre>
      </center>
      </Bpre3>
      <BoxPreT>{opciones[2].textoRespuesta}</BoxPreT>
    </BoxPre3>

    <BoxPre4>
    <Bpre4 onClick={(e) => handleAnswerSumit(opciones[3].isCorrect,e)}>
    <center>
     <Btpre>D</Btpre>
     </center>
    </Bpre4>
      <BoxPreT>{opciones[3].textoRespuesta}</BoxPreT>
    </BoxPre4>
    <BtNext onClick={() => count()}><center><BtpreN  >Next</BtpreN></center></BtNext>
    </div>

	)

}
/*
const baseUrl = "https://sprint-2-1.herokuapp.com/quiz"
	
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
            console.log({id})
            console.log({video})
            console.log({descripcion})
            console.log({pregunta})
            console.log({opciones})
			      console.log({img})
            document.write(id)
			
       })
      .catch(error =>{
         console.log(error)
      });*/