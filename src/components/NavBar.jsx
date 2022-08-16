import React, { Component } from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const { displayName } = useSelector( state => state.login )
    
        return (
            

            <div className="col-12 fixed-top mt-3" >
            <div className="row">
            <NavBarStyled>
            
            <div className="col-6" Style="font-size:15px; text-align:center; margin-left:-10px">
            <h5>9:41</h5>
            </div>
            
            <div className="col-6" Style="font-size:20px; text-align:center;">
            <i className='bx bx-signal-4'></i>
            <i className='bx bx-wifi'></i>
            <i className='bx bxs-battery-full'></i>
            </div>
            
   

            <div className="col-6" Style="text-align:center; margin-left:-10px;">
            <h1 Style="font-size:20px; font-weight:bold;">Hi!</h1>
            <h6 Style="font-weight:400;">{displayName}</h6>
            </div>
            <div className="col-6" Style="text-align:center; margin-left:0px;">
            <i className='bx bx-bell' Style="margin-left:40px;font-size:25px;"></i>
            </div>
            
            </NavBarStyled>
            
            </div>
            </div>

        );
    }


export default NavBar;