import React, { useState } from 'react';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = event => {
      event.preventDefault();
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
   };
   return (
      <div>
         <div
            className='container login-container w-100'
            style={{ marginTop: '100px' }}
         >
            <div
               className='login-form'
               style={{
                  maxWidth: '400px',
                  margin: 'auto',
                  padding: '20px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
               }}
            >
               <h2>Login</h2>
               <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                     <label htmlFor='email'>Email address</label>
                     <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                     />
                  </div>
                  <div className='form-group'>
                     <label htmlFor='password'>Password</label>
                     <input
                        type='password'
                        className='form-control'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                     />
                  </div>
                  <button type='submit' className='btn btn-primary btn-block'>
                     Login
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
