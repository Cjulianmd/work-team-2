import React from 'react'
import {Link} from "react-router-dom"
import  {Contenedor_foto}  from '../styles/PagIntro'
import pag1 from "../images/pag1.png"
import {ButtonIntro, TextIntro} from '../styles/PagIntro'

export const Pag1 = () => {
  return (
    <div className="col-12">
    <div className="row">
    
    <div className="container d-flex fixed-top mt-2; margin-top:100px">
    <div className="col-6" Style="font-size:15px; text-align:center;">
    <h5>9:41</h5>
    </div>
    
    <div className="col-6" Style="font-size:20px; text-align:center;">
    <i className='bx bx-signal-4'></i>
    <i className='bx bx-wifi'></i>
    <i className='bx bxs-battery-full'></i>
    </div>
    </div>
     
   
      <div className="col-12" Style="margin-top:150px">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
      <img Style="height:200px; width:200px;" src={pag1} alt=""/>
      </div>
      </div>
   <div className="col-12 mt-3">
   <div className="row">
   <div className="col-12">
  <div className="container" Style="text-align:center">
   <h1>Choose</h1>
   </div>
   </div>
   <div className="col-12">
   <div className="container" Style="text-align:center">
   <h5>Choose products available add to favorites and then buy</h5>
   </div>
   </div>
   </div>
   </div>
   

   <div className="col-12" Style="margin-top:150px">
   <div className="container d-flex" Style="justify-content: center;aling-items:center;">
   <Link to="/pag2">
   <ButtonIntro>
   Next
   </ButtonIntro>
   </Link>
   </div>
   </div>

   
    </div>
    </div>
  )
}

