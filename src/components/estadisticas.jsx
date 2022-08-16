
import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Statistics.svg'
import Rectangulo from '../components/rectangulo'
import ApBar from '../components/apbar'
const cookies = new Cookies ();

function Elementari(){
   
        return (
            
            <React.StrictMode>
                <Rectangulo/>
                <td><img src={r1} alt=""/></td>
                <ApBar/>
            </React.StrictMode>
        );
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Elementari;