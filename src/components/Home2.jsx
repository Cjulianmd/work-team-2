  
import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext";
import NavBar from '../components/NavBar';
import { ButtonIntro1} from '../styles/PagIntro'
import { ButtonNavBar } from './ButtonNavBar';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';


export const Home2 = () => {


  const logOut = () => {
   
    signOut(auth);
}



    // const { logout, user } = useAuth();

    // console.log(user);
    // const handleLogout = async () => {
    //   try {
    //     await logout();
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };


    //hooks
// let [ejercicios, setejercios]= useState([])
// let [ejercicios1, setejercios1] = useState([])

//refrerenciamos a la db firestore

const ejerciciosCollection = collection(db, "ejercicios")

//funcion para mostrar todos los docs

const getEjercicios = async () => {

    const data =await getDocs(ejerciciosCollection)
    console.log(data.docs)
    const ejercicios1=data.docs

const info=ejercicios1.map((doc)=> ({...doc.data(),id:doc.id}));
    console.log(info)
    const ejercicios=info
    console.log(ejercicios)

}


useEffect( () => {
getEjercicios()
}, [])





  return (


<div className="col-12">
<div className="row">

<NavBar/>

<div ClassName="col-12" Style="margin-top:200px">
<div className="container">
    <ButtonIntro1>
    <Link
    to='/login' Style="background:none; text-decoration:none"
    onClick={logOut}>
    Logout
    </Link>
    </ButtonIntro1>
    </div>
    </div>
</div>
</div>



   





 
  
    

  )
  }



