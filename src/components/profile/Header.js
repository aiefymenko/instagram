import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";

export default function Header({photosCount, profile, followerCount, setFollowerCount}) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  return (
    <div>Header</div>
  )
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired
}
