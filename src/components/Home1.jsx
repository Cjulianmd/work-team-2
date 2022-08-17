
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import Logo3 from '../images/Logo3.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import cover1 from '../images/cover1.jpeg'
import {TextIntro2, Container1, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../styles/PagIntro"
import React, {useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db} from '../firebase';
import { getAuth, signOut } from "firebase/auth";
import {auth} from "../firebase"
import { ButtonNavBar } from './ButtonNavBar';
import {  listaProductosAsync  } from '../Redux/Actions/CreateWorkAction';
import { useSelector, useDispatch } from 'react-redux';

export const Home1 = () => {


const {Cita} = useSelector(state => state.workouts)

const dispatch = useDispatch();

useEffect(() => {
  
dispatch( listaProductosAsync ())

},[dispatch])



useEffect(() => {
console.log(Cita)
},[ Cita])
//         //hooks
// const [ejercicios1, setejercicios1]= useState([])
// // const [ejercicios2, setejercicios2] = useState([])
// const [filtrado, setfiltrado]= useState([])
// //refrerenciamos a la db firestore

// const ejerciciosCollection = collection(db, "ejercicios")

// //funcion para mostrar todos los docs

//  const getEjercicios = async () => {

//     const data =await getDocs(ejerciciosCollection)
//     console.log(data.docs)
//     const ejercicios2=data.docs

// const info=ejercicios2.map((doc)=> ({...doc.data(),id:doc.id}));
//     console.log(info)
//      const ejercicios=info;
//      setejercicios1(ejercicios)
// }


// useEffect( () => {
// getEjercicios()
// }, [])

// const filtrar= (cat) => {
   
//  const filtrado1 = ejercicios1.filter(elemento => elemento.categoria === cat);
// setfiltrado(filtrado1)
// }
    
  return (
    <div className="col-12">
    <div className="row">
    
<NavBar />


<div className="col-12" Style="margin-top:100px">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
      <div className="slider__section">
      <div className="col-6" Style=" background: #B4FFD8; margin-left:10px">
      
      <h1 Style="background: #B4FFD8; margin-top:30px; font-size:17px;">New Purchases</h1>
      <p Style="font-size:10px; background: #B4FFD8;">Shop more with the new product finder</p>
      
      </div>

      <div className="col-6" Style="background: #B4FFD8;">
      <img Style="background: none; margin-top:0px;" className="imgPortada" src={Logo3} alt=""/>
      </div>
      </div>
      </div>
      </div>


{
 Cita?.map(elemento=>(   
<div className="col-12 mt-4">
<div className="container d-flex" Style="justify-content: center;aling-items:center;">
<Container1>
<div className="col-12">
<img src={elemento.img}  Style="height:110px; width:360px; margin-left:18px;"alt="cover"/>
</div>
<div className="col-12" Style="margin-top:130px; text-align:start; margin-left:-320px">
<div className="row">
<div className="col-8">
<h1 Style="text-align: start; font-size:13px; background:none;">{elemento.name}</h1>
</div>
<div className="col-4">
<h5 Style="text-align: center; font-size: 12px; background:none;">{elemento.precio}</h5>
</div>
</div>
<div className="col-12">
<p Style="text-align:start; font-size:8px; font-weight:300px; margin-right:40%; background:none;">{elemento.descripcion}</p>
</div>
</div>
</Container1>
</div>
</div>
))
}


<ButtonNavBar />
   </div>
   </div>
 
  
  )
}

