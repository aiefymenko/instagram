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
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
    <div className="flex w-3/5 h-1/2">
      <img src="/images/iphone-image.png" alt="Iphone with profile" />
    </div>
    </div>
  )
}
