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
    <div>login is here</div>
  )
}
