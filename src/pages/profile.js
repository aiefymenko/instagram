import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const {username} = useParams();
  const [user, setUser] = useState('');
  const [userExist, setUserExist] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function checkUserExist() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user);
        setUserExist(true);
      } else {
        history(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
  

  }, [history, username])
  

  return userExist ? (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        {username}
      </div>
    </div>
  ) : null;
}
