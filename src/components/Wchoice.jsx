import React from 'react'
import {Link} from "react-router-dom"
import  {Contenedor_foto}  from '../styles/PagIntro'
import img1 from "../images/img1.jpeg"


export const Wchoice = () => {
  return (
    <div className="col-12">
    <div className="row">
    <div className="container d-flex" Style="justify-content:center; align-items: center;">
    <img src={img1} Style="height:500px;width:400px;" alt=""/>
    </div>
    </div>
    </div>
  )
}

