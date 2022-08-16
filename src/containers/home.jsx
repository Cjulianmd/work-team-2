
import React, { Component } from 'react';
import { Re1, Re5 } from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import Rectangulo from '../components/rectangulo'
import {NavLink} from 'react-router-dom'
import ApBar from '../components/apbar'

class Home extends Component {
    
    
    render() {
          
        return (
            
            <React.StrictMode>
               <Rectangulo/>
               <NavLink to='/ele'><Re1><td><img src={r1} alt=""/></td></Re1></NavLink>
                <Re5><td><img src={r2} alt=""/></td></Re5>
                <ApBar/>
            </React.StrictMode>
        );
    }
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Home;