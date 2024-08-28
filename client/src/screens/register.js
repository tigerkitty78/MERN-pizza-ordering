import React from 'react';
import { useState,useEffect } from 'react';
import {registerUser} from '../actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from 'react-redux';
export default function Register() {
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[cpassword,setcpassword]=useState('');


    const dispatch=useDispatch();
   
function register(){
    if(password!==cpassword)
    {
        alert("passwords not matching")
    }
    else{
        const users={
            name,
            email,
            password
        };
        console.log(users);
        dispatch(registerUser(users))
    }
}




  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
            <h2>Register</h2>
          <div>
            <input required type="text" placeholder="Name" className="form-control mb-3" 
             value={name}
             onChange={(e)=>{setname(e.target.value)}} />
            
          


            <input required type="text" placeholder="Email" className="form-control mb-3" 
             value={email}
             onChange={(e)=>{setemail(e.target.value)}} 
            />

            <input required type="text" placeholder="password" className="form-control mb-3"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}} />

            <input required type="text" placeholder="confirm password" className="form-control mb-3"
             value={cpassword}
             onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button onClick={register} className='btn mt-3'>Register</button>

          </div>
        </div>
      </div>
    </div>
  );
}

