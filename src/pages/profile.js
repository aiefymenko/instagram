import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from '../constants/routes';
import Header from "../components/Header";
import UserProfile from '../components/profile'


export default function Profile() {
  const {username} = useParams();
  const [user, setUser] = useState('');
  const [userExist, setUserExist] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function checkUserExist() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExist(true);
      } else {
        history(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
  

  }, [username, history])
  

  return userExist ? (
    <div className="bg-gray-background">
      <Header /> 
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} /> {user.fullName}
      </div>
    </div>
  ) : null;
}
