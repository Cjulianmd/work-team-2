import { ChakraProvider } from '@chakra-ui/react';
import '../Global.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {LogOut}from '../components/LogOut';
import {Home2} from '../components/Home2';
import {Wchoice} from '../components/Wchoice';
import {LogIn} from '../components/LogIn';
import {SingUp} from '../components/SingUp';
import {Home1} from '../components/Home1';
import Home from '../containers/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateWork } from '../components/CreateWork';
import {EditWork} from '../components/EditWork';
import {NewWork} from '../components/NewWork';
import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
 const AppRoutes =() => {

    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
       
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                const { displayName, photoURL, email, uid } = user
                // Posibilidad de recuperar la info luego de que se recargue la web
                dispatch(loginProvider({displayName, email, photoURL, uid}))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        } )
    }, [])

        return (
         
           
                <BrowserRouter>
                    <Routes>
  <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <LogIn /> </PublicRoutes>} />
                    <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />


                        <Route path='/' element={<PrivateRoutes isAutentication={auth1}> <Home /> </PrivateRoutes>} />
                        <Route path="/create" element={<PrivateRoutes isAutentication={auth1}><CreateWork /></PrivateRoutes>} />
                        <Route path="/new" element={<PrivateRoutes isAutentication={auth1}><NewWork /></PrivateRoutes>} />
                        <Route path="/home2" element={<PrivateRoutes isAutentication={auth1}><Home2/></PrivateRoutes>} />
                        <Route path="/home1" element={<PrivateRoutes isAutentication={auth1}><Home1/></PrivateRoutes>} />
                        <Route path="/logout" element={<PrivateRoutes isAutentication={auth1}><LogOut /></PrivateRoutes>} />
                        <Route path="/edit" element={<PrivateRoutes isAutentication={auth1}><EditWork /></PrivateRoutes>} />
                        <Route path="/wchoice" element={<PrivateRoutes isAutentication={auth1}><Wchoice /></PrivateRoutes>} />
            
                        <Route path="*" element={<Navigate to="/login"/>}/> 
                     <Route path="/" element={<Home />} />
                       
                   
                  
                    </Routes>
                </BrowserRouter>
             
          
        );
    }

export default AppRoutes;