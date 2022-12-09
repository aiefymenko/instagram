import React, {useState, useEffect, useContext} from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChange((authUser) => {
      //we have a user so we can store it local localstorage
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we don't have authUser then clear localstorage
        localStorage.removeItem('authUser');
        setUser(null);
      }
      
    })

    return() => listener();

  }, [firebase])

  return (
    {user}
  )
}
