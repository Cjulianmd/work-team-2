import React from 'react'

import {Link} from 'react-router-dom'
import Logo2 from '../images/Logo2.png'
import { Img1 } from '../styles/StylesGlobal'

const Home = () => {
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
  

   <div className="col-12" Style="margin-top:200px">
   <div className="container d-flex" Style="justify-content: center;aling-items:center;">
   <Link to="/pag1"><img Style="height:200px; width:200px;" src={Logo2} alt=""/><h6>click</h6></Link>
   </div>
   </div>

 </div>
 </div>
  )
}

export default Home