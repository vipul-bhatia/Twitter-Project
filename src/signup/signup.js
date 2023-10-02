import React from 'react';
import { Link } from 'react-router-dom';
import '../signup/signup.css';
import { Helmet } from 'react-helmet';
import { useState } from 'react'
import  { useSignup } from '../hooks/useSignup'


export default function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const {signup, isPending, error} = useSignup()

  const handleSubmit=(e)=>{
    e.preventDefault()
    signup(email,password,displayName)
}

    return (
        <div className='wrapper'>
         <Helmet>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Helmet>
          <div className='wrapper1'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required onChange={(e)=> setEmail(e.target.value)} value = {email}/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} value = {password}/>
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='DisplayName' required onChange={(e)=> setDisplayName(e.target.value)} value = {displayName}/>
                    <i className='bx bxs-user-check'></i>
                </div>
                <div className='remember-forgot'>
                </div>
                {!isPending &&  <button className='btn'>Signup</button>}
        {isPending && <button className='btn' disabled>Signing up...</button>}
        {error &&<p>{error}</p>}
            </form>
            </div>
        </div>
    );
}










// import React from 'react'
// import { useState } from 'react'



// //styles
// import styles from './signup.module.css'

// export default function Signup() {



//   return (
//     <form className={styles['signup-form']} onSubmit={handleSubmit}>
//         <h2>Signup</h2>
//         <label>
//             <span>Email</span>
//             <input
//             type='email'

//             required 
//             />
//             <span>Password</span>
//             <input
//             type='password'
//             onChange={(e)=> setPassword(e.target.value)}
//             value={password} 
//             required
//             />
//             <span>Display Name</span>
//             <input
//             type='text'
//             onChange={(e)=> setDisplayName(e.target.value)}
//             value={displayName}
//             required
//             />
//         </label>

//     </form>
//   )
// }
