
import "../Global.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonIntro1, Body } from '../styles/PagIntro'
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import Logo2 from '../images/Logo2.png'
import Image from '../styles/PagIntro'
import { loginGoogle, LoginWithEmail } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";

export function LogIn() {



  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const reset = () => {
    setUser({})
  } 
  // const { login, loginWithGoogle, resetPassword, singInWithFacebook } = useAuth();
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await login(user.email, user.password);
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(LoginWithEmail(user.email, user.password))
      reset()
  }

  const handleGoogle = () => {
      dispatch(loginGoogle())
  }


  // const handleGoogleSignin = async () => {
  //   try {
  //     await loginWithGoogle();
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const handleFacebookSignin = async () => {
  //   try {
  //     await singInWithFacebook();
  //     navigate("/home1");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const handleResetPassword = async (e) => {
  //   e.preventDefault();
  //   if (!user.email) return setError("Write an email to reset password");
  //   try {
  //     await resetPassword(user.email);
  //     setError('We sent you an email. Check your inbox')
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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
     

      <div className="col-12" Style="margin-top:100px">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
      <img Style="height:90px; width:90px;" src={Logo2} alt=""/>
      </div>
      </div>
    
       
     

    <div className="col-12 mt-5">
    <div className="row">
    <Singupfrm>
      <Form onSubmit={handleSubmit}>
        <InputContainer className="mb-3 mt-3">
        <Label htmlFor="email">Email</Label>
        <Input1 type="email" name="email"  onChange={handleChange} placeholder="youremail@gmail.com"/>
        </InputContainer>
        <InputContainer className="mb-2">
          <Label htmlFor="password">Password</Label>
          <Input1  type="password" name="password" onChange={handleChange} 
            placeholder="*************"/>
        </InputContainer>

        <div className="col-12">
        <div className="row">
           <div className="container" Style="text-align: center;">
                <ButtonIntro1 >
                sing in
              
                </ButtonIntro1>
          </div>
        </div>
        </div>
        </Form>
        </Singupfrm>
          </div>
          </div>


<div className="col-12  mt-2">
<div className="container" Style="text-align:center">
<a href="#!" Style="font-weight:400; font-size:12px;color:rgba(71, 71, 71, 1); text-decoration:none;"> 
 Forgot Password?
</a>
</div>  
</div>   

      <div className="col-12">
      <div className="container" Style="text-align:center; margin-top:50px; font-size:20px">
    <h1>Sing In With</h1>
      </div>
      </div>
      
      <div className="col-12">
      <div className="row" Style="text-align:center;">
      <div className="container d-flex">
      <div className="col-6" Style="margin-left:50px;">
      <button Style="border:none">
      <img Style="height:60px;" src={logofb} alt=""/>
      </button>
      </div>
      <div className="col-6" Style="margin-left:-100px; background:none;">
      <button onClick={handleGoogle} Style="border:none">
      <img Style="height:60px; width:60px;" src={logogoogle} alt=""/>
      </button>
      </div>
      </div>
      </div>
     </div>
      

      <div className="col-12">
      <div className="container" Style="margin-top:40px; font-weight:400; font-size:14px; text-align:center;color:rgba(71, 71, 71, 1)">
      Dont have account?
      <Link to="/singup" Style="color:rgba(180, 255, 216, 1); margin-left:10px; text-decoration:none">
        Sing up
      </Link>
      </div>
      </div>
     
    </div>
    </div>
   
    
  );
}