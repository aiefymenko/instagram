import PropTypes from 'prop-types';
import {useState} from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Comments({docId, comments: allComments, posted, commentInput }) {
  const [comments, setComments] = useState(allComments);
  return (
    <>
    <p>I am comment</p>
    </>
  )
}
