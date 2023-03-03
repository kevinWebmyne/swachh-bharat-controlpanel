import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
const Login = () => {


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])


    const  Submit = () => {
        // console.log(name,email,password);
        let data = {email,password};
        console.log(data);
        fetch("http://localhost:3001/api/noAuth/users/login",{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
          }).then((res)=>{
            console.log(res);
            res.json().then((result)=>{
            if(result.status===200) {
                console.log(result.status);
                localStorage.setItem("user",result.data);
                navigate('/home')
            }
            else{
                console.log(result);
                const err = result.err_msg;
                alert(err);
            }
            })
          })
    }


    return(
        <div className="login-card">
        <h1>Log-in</h1><br />
        <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password"  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        <input type="submit"  onClick={Submit} className="login login-submit" value="login"  />
    </div>
    )
}
export default Login;