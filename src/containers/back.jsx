import React, { Component } from 'react'
import { TextB, TitleB, InputT, InputP, Log, TextB2, Texts} from '../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import Login from '../assets/img/login.svg'
import Tap1 from '../components/NavBar'
import axios from 'axios'
import Cookies from 'universal-cookie';

const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';
const cookies = new Cookies ();
//https://app.getpostman.com/join-team?invite_code=950e74ddfd453ab2408546f1b16676ec
class back extends Component {
   state = {
      form: {
         telefono:'',
         password:''
      }
   }
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value
         }
      })
      
   }
  
   iniciarsesion = async () =>{console.log(this.state.form.telefono,this.state.form.password)
       await axios.get(baseUrl , {params: {telefono:this.state.form.telefono,password: this.state.form.password,}})
         
         .then(response =>{
            console.log(response.data.id)
            return response.data;
         })
         .then(response=>{
            if(response.length>0){
               let respuesta = response[0];
               cookies.set('nombre', respuesta.nombre, {phat: "/"});
               cookies.set('email', respuesta.email, {phat: "/"});
               cookies.set('telefono', respuesta.telefono, {phat: "/"});
               cookies.set('coins', respuesta.coins, {phat: "/"});
               cookies.set('password', respuesta.password, {phat: "/"});
               cookies.set('id', respuesta.id, {phat: "/"});
               window.location.href="./home";

            }else{
               alert('ni escribir un usuario sabes que haces con tu vida? usuario o contraseña incorrectos')
               window.location.href="./Singin";
            }
         })
         .catch(error =>{
            console.log(error)

         })
   }
//componentDidMount(){if(cookies.get('nombre')){window.location.href="./home";} }
  render() {
    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <TitleB>
            Welcome back
         </TitleB>
         <TextB>
            Sign in to an existing account using your phone number
         </TextB>
         <form>
            <InputT name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange} />
            <InputP name="password" placeholder="Password" size="2em" onChange={this.handleChange}/>
         </form>
         <Log>
            <NavLink to="/home" onClick={()=> this.iniciarsesion() }>
                           <td><img src={Login} alt=""/></td>
            </NavLink>
         </Log>
         <TextB2>
         D’ont have account ?
         </TextB2>
         <NavLink  to="/registrer" >
            <Texts >Sign up</Texts> 
         </NavLink>
         
         </React.StrictMode>
      </div>
    )
  }
}
export default back;
//to="/veryfication"