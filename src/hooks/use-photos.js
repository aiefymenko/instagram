import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

export default function usePhotos() {
const [photos, setPhotos] = useState(null);

return {photos};
}


