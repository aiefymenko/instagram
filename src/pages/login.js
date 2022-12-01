import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase'

export default function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setErrro] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {

  }

  useEffect(() => {
    document.title = 'Login-instagram'
  }, []);

  return (
    <div className="container flex  mx-auto max  -w-screen-md items-center h-screen">
    <div className="flex justify-end w-1/2 h-5/6">
      <img src="/images/iphone-image.png" alt="Iphone with profile" />
    </div>
    <div className="flex flex-col w-1/2">
      <h1 className='flex justify-center w-full'>
        <img src='/images/logo.png' alt = 'Instagram logo' />
        </h1>
        { error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
          aria-label='Enter your email address'
          type = 'text'
          placeholder='Email address'
          className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-primery rounded mb-2'
          onChange={({target}) => setEmailAddress(target.value)}
          />
                    <input
          aria-label='Enter your password'
          type = 'password'
          placeholder='Password'
          className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-primery rounded mb-2'
          onChange={({target}) => setPassword(target.value)}
          />
          <button
          disabled={isInvalid}
          type='submit'
          className={`bg-blue-500 text-white w-full rounded h-8 font-bold
          ${isInvalid && 'opacity-50'}`}> Log In </button>
        </form>
    </div>
    </div>
  )
}
