import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../context';
const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Global Unreported Cases</span>
        <div className='nav-links'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          {user && (
            <Link
              onClick={() => {
                logoutUser();
              }}
              className='nav-link'
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
