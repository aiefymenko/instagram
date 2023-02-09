import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from '../constants/routes';
import Header from "../components/Header";
import UserProfile from '../components/profile'


export default function Profile() {
  const {username} = useParams();
  const [user, setUser] = useState('');
  const history = useNavigate();

  useEffect(() => {
    async function checkUserExist() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        history(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
  

  }, [username, history])
  

  return user?.username ? (
    <div className="bg-gray-background">
      <Header /> 
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
