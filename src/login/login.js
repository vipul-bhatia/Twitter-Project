import React from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';
import { Helmet } from 'react-helmet';
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,error,isPending} = useLogin()

  const handleSubmit = (e)=>{
     e.preventDefault()
     login(email,password)
  }
    return (
        <div className='wrapper'>
         <Helmet>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Helmet>
          <div className='wrapper1'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Email' required onChange={(e)=> setEmail(e.target.value)} value = {email}/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} value = {password}/>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className='remember-forgot'>
                </div>
                {!isPending && <button className='btn'>Login</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        {error && <p>{error}</p>}
            </form>
            </div>
        </div>
    );
}








// //styles
// import styles from './login.module.css'

// export default function Login() {


//   return (
//     <form className={styles['login-form']} >
//         <h2>Login</h2>
//         <label>
//             <span>Email</span>
//             <input 
//             type='email' 

//             required
//             />
//         </label>
//         <label>
//             <span>Password</span>
//             <input
//             type='password'

//             required
//             />
//         </label>

//     </form>
//   )
// }
