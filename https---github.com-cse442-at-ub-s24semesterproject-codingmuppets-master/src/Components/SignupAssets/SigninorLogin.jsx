import React from 'react';
import './SigninorLogin.css';
import Button from '@mui/material/Button'; 

const SigninorLogin= ()=> {
    return (
        <div className= 'container'>
            <div className= "header">Sign Up</div>
            <div className ="Email"> Email <input type ="Email"></input></div>
            <div className ="Password"> Password <input type ="Password"></input></div>
            <div className ="Username"> Username <input type ="username"></input><span> <Button> Submit</Button> </span></div>
            <div className ="Sign In"> Sign In <span> <Button> Sign In</Button> </span></div>
             
             
        </div>
         
        
    )
    
}
export default SigninorLogin