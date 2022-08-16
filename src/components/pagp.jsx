import React, { Component } from 'react'
import r1 from '../assets/img/Account settings.svg'
import r2 from '../assets/img/History.svg'
import r3 from '../assets/img/Payment.svg'
import r4 from '../assets/img/Terms of use.svg'
import r5 from '../assets/img/Support.svg'
import { Re6, Re2 } from '../style/StyleGlobal'
import ApBar from '../components/apbar'
import Rectangulo from '../components/rectangulo'
import {NavLink} from 'react-router-dom'

export default class pagp extends Component {
  render() {
    
    return (

      <div>
        <Rectangulo/>
        <NavLink to='/Account-settings'><Re6><td><img src={r1} alt=""/></td></Re6></NavLink>
        <NavLink to='/transation'><Re2><td><img src={r2} alt=""/></td></Re2></NavLink>
        <NavLink to='/walled'><Re2><td><img src={r3} alt=""/></td></Re2></NavLink>
        <Re2><td><img src={r4} alt=""/></td></Re2>
        <Re2><td><img src={r5} alt=""/></td></Re2>
        <ApBar/>
      </div>
    )
  }
}
