import React, { Component } from 'react'
import { TextC, TitleC, InputT1,  InputN, InputE, BtNext, BtpreN, Textacon1} from '../style/StyleGlobal';
import Tap1 from '../components/NavBar'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { Back } from './../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
const cookies = new Cookies ();

const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';
class actualizar extends Component {
    
   state = {
      form: {
         nombre:'',
         email:'',
         telefono:'',
         password:'',
         id:''
      }
   }
   

   actualizar = () =>{
    
    let nombre = cookies.get('nombre'); 
    let email = cookies.get('email');
    let telefono = cookies.get('telefono');
    let coi = cookies.get('coins');
    let password = cookies.get('password'); 
        
      axios.put(baseUrl+password ,{
         nombre:this.state.form.nombre,
         email:this.state.form.email,
         telefono:this.state.form.telefono,
         password: password,
         coins: coi
      }) 
    
        .catch(error =>{
         if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
   //window.location.href="./Singin" 
   console.log(this.state.form.nombre)
   if(this.state.form.nombre = 'null'){
    this.state.form.nombre = nombre
    }
    if(this.state.form.email = 'null'){
    this.state.form.email = email
    }
    if(this.state.form.telefono = 'null'){
    this.state.form.telefono = telefono
    }
   }
  
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value,
            
         }
      });console.log(this.state.form)
       
   }
   

  render() {
        
    return (
      <div><Tap1/>
         <React.StrictMode>
          <NavLink to='/Account-settings'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>actualizar</Textacon1>
         
         <TitleC>
            actualizar datos
         </TitleC>
         <TextC>
         aqui puedes actualizar tus datos
         </TextC>
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
            <InputN  name="nombre" placeholder="nombre" size="2em" onChange={this.handleChange} />
            <InputE name="email" placeholder="email" size="2em"  onChange={this.handleChange} />
            <InputT1 name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange}/>
         </form>
           <BtNext onClick={() => this.actualizar()}><center><BtpreN>save</BtpreN></center></BtNext>
         
         </React.StrictMode>
      </div>
    )
  }
}
export default actualizar;