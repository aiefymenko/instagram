import PropTypes from 'prop-types';
import {useState, useContext} from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Actions({docId, totalLikes, likedPhoto, handleFocus}) {
  const {
    user: {uid: userId = ''}
  } = useContext(UserContext);

  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes)
  const {firebase, FieldValue} = useContext(FirebaseContext);
  }


Actions.propTypes = {

}