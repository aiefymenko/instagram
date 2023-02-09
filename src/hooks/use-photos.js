import { useState, useEffect } from "react";
import { getPhotos } from "../services/firebase";

export default function usePhotos(user) {
const [photos, setPhotos] = useState(null);
 

useEffect(() => {
async function getTimeLinePhotos() {
  
//does the user actually follow people
  if (user?.following?.length > 0) {
   const followedUserPhotos = await getPhotos(user.userId, user.following)
      //re-arrange array by newest date created
    followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
    setPhotos(followedUserPhotos);
  }


}
getTimeLinePhotos();
}, [user.following, user.userId])

return {photos};
}


