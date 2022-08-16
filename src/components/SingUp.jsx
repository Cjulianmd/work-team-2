import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import { auth, createUserDocument } from "../firebase";
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import Logo2 from '../images/Logo2.png'
import { registerWithEmail } from "../Redux/Actions/userAction";

export function SingUp() {
  // const { singup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    name:"",
    password: "",
  });

const reset = () => {
  setUser({})
}  

const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(registerWithEmail(user.email, user.password, user.name))
reset();
}

  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await singup(user.email, user.password, user.displayName, user.phoneNumber);
  //     navigate("/");
  //     console.log(user)
     
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }



console.log(user);
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
      <div className="col-12">
      <Singupfrm>

      <Form onSubmit={handleSubmit}>

      <InputContainer className="mb-2 mt-3">
      <Label htmlFor="email">Email</Label>
      <Input1 type="email" name="email"   onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="youremail@gmail.com"/>
    </InputContainer>
    <InputContainer className="mb-3 mt-3">
      <Label htmlFor="name">Name</Label>
      <Input1 type="text" name="name"   onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="username"/>
    </InputContainer>
    <InputContainer className="mb-2">
      <Label htmlFor="password">Password</Label>
      <Input1 type="password" name="password"  onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="*************"/>
    </InputContainer>
    <div className="col-12">
    <div className="row">
    <div className="container d-flex" Style="justify-content:center;">
    <ButtonIntro1>
    Register
    </ButtonIntro1>
  </div>
    </div>
    </div>
    </Form>
    </Singupfrm>
  </div>
</div>
</div>

      

     
    <div className="col-12">
    <div className="row">
    <div className="col-12" Style="margin-top:20px; font-weight:400; font-size:14px; text-align:center;color:rgba(71, 71, 71, 1)">
        Already have an Account?
        <Link to="/login" Style="color:rgba(180, 255, 216, 1); margin-left:20px; text-decoration:none;">
          Login
        </Link>
      </div>
    </div>
    </div>
     
 
</div>
</div>

  );
}

