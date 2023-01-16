import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const {username} = useParams();
  const [userExist, setUserExist] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    async function checkUserExist() {
      const doesUserExist = await getUserByUsername(username);
      if (doesUserExist.length > 0) {
        setUserExist(true);
      } else {
        setUserExist(false);
        history(ROUTES.NOT_FOUND);
      }
    }
  

  }, [])
  

  return (
    <div>Profile</div>
  )
}
