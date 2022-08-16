import React, { Component } from 'react'
import Rectangulo from '../components/rectangulo'
import ApBar from '../components/apbar'
import r1 from '../assets/img/Topics.svg'
import { Re2} from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'
export default class test extends Component {
  render() {
    return (
      <div>
        <Rectangulo/>
        <NavLink to="/preguntas"><Re2 ><img  src={r1} alt=""/></Re2></NavLink>
        <ApBar/>

      </div>
    )
  }
}
