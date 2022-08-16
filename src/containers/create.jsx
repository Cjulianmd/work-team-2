import React, { Component } from 'react'
import { TextC, TitleC, InputT1, InputP1, Log, InputN, InputE, BtNext} from '../style/StyleGlobal';
import Create from '../assets/img/create.svg';
import Tap1 from '../components/NavBar'
import axios from 'axios'
import { BtpreN } from './../style/StyleGlobal';

const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';
class create extends Component {

   state = {
      form: {
         nombre:'',
         email:'',
         telefono:'',
         password:'',
         id:''
      }
   }

   registrer = () =>{
     console.log("creaste una cuenta");
     alert("creaste una cuenta")
    
      axios.post(baseUrl ,{
         nombre:this.state.form.nombre,
         email:this.state.form.email,
         telefono:this.state.form.telefono,
         password: this.state.form.password,
         id: this.state.form.password ,
         coins:"0"
      }
         ) 
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
   window.location.href="./Singin"
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
      <div>
         <React.StrictMode>
         <Tap1/>
         <TitleC>
            Create new Account
         </TitleC>
         <TextC>
         Create a new account by filling in all the fields or log in to an existing account
         </TextC>
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
            <InputN  name="nombre" placeholder="nombre" size="2em" onChange={this.handleChange} />
            <InputE name="email" placeholder="email" size="2em"  onChange={this.handleChange} />
            <InputT1 name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange}/>
            <InputP1 name="password" placeholder="Password" size="2em" onChange={this.handleChange} />
         </form>
         <BtNext onClick={() => this.registrer()}><center><BtpreN>create</BtpreN></center></BtNext>
         </React.StrictMode>
      </div>
    )
  }
}
export default create;