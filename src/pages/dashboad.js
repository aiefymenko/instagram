import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/Sidebar';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';



export default function Dashboard({ user: loggedInUser }) {
  const { user } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = 'Instagram';
  }, []);


  return (
    <LoggedInUserContext.Provider value={{user}}>
    <div className='bg-gray-background'>
      <Header />
    <div className='grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg'>
        <Timeline />
        <Sidebar />
      </div>
      </div>
      </LoggedInUserContext.Provider>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};