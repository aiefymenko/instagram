import React from 'react';
import useUser from '../hooks/use-user';

export default function Sidebar() {
  const {user: {fullName, username, userId }} = useUser();

  console.log('fullName, username, userId', fullName, username, userId);
  return (
    <div>Sidebar</div>
  )
}
